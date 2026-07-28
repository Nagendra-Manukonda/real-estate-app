import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Porchlight",
    template: "%s | Porchlight",
  },
  description:
    "Discover premium homes across Australia. Browse verified property listings, compare homes, calculate mortgages, and connect with trusted real estate agents.",
  keywords: [
    "Real Estate", "Australia", "Homes", "Property", "Apartments",
    "Luxury Homes", "Buy House", "Sell Property", "Mortgage", "Porchlight",
  ],
  authors: [{ name: "Porchlight" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Porchlight | Premium Real Estate",
    description:
      "Browse verified homes across Australia with modern search, saved listings, mortgage tools, and trusted agents.",
    type: "website",
    locale: "en_AU",
    siteName: "Porchlight",
  },
  twitter: {
    card: "summary_large_image",
    title: "Porchlight",
    description: "Premium Australian Real Estate Platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-paper text-ink antialiased transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}