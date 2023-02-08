"use client";

import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useUsers } from "@/networking/useUsers";
import { UsersFilters } from "@/networking/types";
import { useEffect, useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import { debounce } from "@mui/material/utils";

import { useGists } from "@/networking/useGists";
import { GistCard } from "@/components/Gist/card";
import { useRouter, useSearchParams } from "next/navigation";

type AutocompleteType = {
  id: string;
  label: string;
};

const EMPTY_AUTOCOMPLETE: AutocompleteType = {
  id: "",
  label: "",
};

export default function Home() {
  const { push } = useRouter();
  const query = useSearchParams();
  const [inputValue, setInputValue] = useState(query.get("q") ?? "");

  const [selectedUser, setSelectedUser] = useState<AutocompleteType>(
    inputValue.length
      ? { id: inputValue, label: inputValue }
      : EMPTY_AUTOCOMPLETE
  );
  const [filters, setFilters] = useState<UsersFilters>({ q: "" });

  const { data } = useUsers(filters);
  const { data: gists } = useGists(selectedUser?.id ?? "");

  const search = useMemo(() => debounce(setFilters, 400), []);

  useEffect(() => {
    search({
      q: inputValue,
    });
  }, [inputValue, search]);

  useEffect(() => {
    if (selectedUser) {
      push(`/?q=${selectedUser.id}`);
    }
  }, [push, selectedUser]);

  return (
    <Stack sx={{ margin: 2 }} spacing={4}>
      <Autocomplete
        fullWidth
        options={(data?.data.items ?? []).map((user) => ({
          id: user.login,
          label: user.login,
        }))}
        renderInput={(params) => <TextField {...params} label="Users" />}
        value={selectedUser}
        inputValue={inputValue}
        onInputChange={(evt, newValue) => {
          setInputValue(newValue);
        }}
        onChange={(evt, value) => {
          setSelectedUser(value ?? EMPTY_AUTOCOMPLETE);
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
