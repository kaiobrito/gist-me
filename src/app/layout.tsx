"use client";

import AppTheme from "@/components/theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <AppTheme>
        <CssBaseline />
        <body>{children}</body>
      </AppTheme>
    </html>
  );
}
