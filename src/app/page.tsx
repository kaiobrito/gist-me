"use client";

import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <Stack sx={{ margin: 2 }}>
      <Autocomplete
        fullWidth
        options={[]}
        renderInput={(params) => <TextField {...params} label="Users" />}
      />
    </Stack>
  );
}
