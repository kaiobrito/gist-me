"use client";

import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useUsers } from "@/networking/useUsers";
import { UsersFilters } from "@/networking/types";
import { useState } from "react";
import Grid from "@mui/material/Grid";

import { useGists } from "@/networking/useGists";
import { GistCard } from "@/components/Gist/card";

export default function Home() {
  const [selecteUser, setSelectedUser] = useState<string>("");
  const [filters, setFilters] = useState<UsersFilters>({ q: "" });

  const { data } = useUsers(filters);
  const { data: gists } = useGists(selecteUser);

  const searchUsers = (term: string) => {
    setFilters({
      q: term,
    });
  };

  return (
    <Stack sx={{ margin: 2 }} spacing={4}>
      <Autocomplete
        fullWidth
        options={data?.data.items ?? []}
        getOptionLabel={(option) => option.login}
        renderInput={(params) => <TextField {...params} label="Users" />}
        onInputChange={(evt, inputValue) => {
          searchUsers(inputValue);
        }}
        onChange={(evt, value) => {
          setSelectedUser(value?.login ?? "");
        }}
      />
      <Grid container>
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            {gists?.data.map((gist) => (
              <GistCard key={gist.id} gist={gist} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
