"use client";

import AppTheme from "@/components/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { QueryClientProvider, QueryClient } from "react-query";
import "./globals.css";

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
          <body>{children}</body>
        </QueryClientProvider>
      </AppTheme>
    </html>
  );
}
