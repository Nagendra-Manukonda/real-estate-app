import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Porchlight | Real estate listings",
  description: "Browse verified real estate listings, filter down to what fits, and save your favorites.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        suppressHydrationWarning here only ignores attribute mismatches on
        this exact tag (e.g. data-gr-ext-installed added by the Grammarly
        browser extension before React hydrates) — it does NOT hide real
        rendering bugs elsewhere in the app.
      */}
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}