"use client";

import AppTheme from "@/components/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { QueryClientProvider, QueryClient } from "react-query";
import "./globals.css";

import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const client = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <AppTheme>
        <CssBaseline />
        <QueryClientProvider client={client}>
          <body>
            <AppBar position="fixed">
              <Toolbar color="secondary">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  color="white"
                >
                  Gist me
                </Typography>
              </Toolbar>
            </AppBar>
            <Container maxWidth="lg" sx={{ my: 12 }}>
              {children}
            </Container>
          </body>
        </QueryClientProvider>
      </AppTheme>
    </html>
  );
}
