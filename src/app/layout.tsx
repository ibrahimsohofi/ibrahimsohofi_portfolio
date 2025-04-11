import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibrahim Sohofi - Web Developer Portfolio",
  description: "Ibrahim Sohofi is a web developer focused on creating modern, responsive, and user-friendly websites and applications.",
  keywords: "web developer, frontend developer, javascript, react, html, css, portfolio, ibrahim sohofi",
  authors: [{ name: "Ibrahim Sohofi" }],
  creator: "Ibrahim Sohofi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn(inter.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
