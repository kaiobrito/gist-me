import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({});

type Props = {
  children: React.ReactNode;
};

export default function AppTheme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
