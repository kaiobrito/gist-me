"use client";

import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useUsers } from "@/networking/useUsers";
import { UsersFilters } from "@/networking/types";
import { useState } from "react";

export default function Home() {
  const [filters, setFilters] = useState<UsersFilters>({ q: "" });
  const { data } = useUsers(filters);

  const searchUsers = (term: string) => {
    setFilters({
      q: term,
    });
  };

  return (
    <Stack sx={{ margin: 2 }}>
      <Autocomplete
        fullWidth
        options={data?.data.items ?? []}
        getOptionLabel={(option) => option.login}
        renderInput={(params) => <TextField {...params} label="Users" />}
        onInputChange={(evt, inputValue) => {
          searchUsers(inputValue);
        }}
      />
    </Stack>
  );
}
