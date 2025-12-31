 import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hanna — UX/UI Designer",
  description: "UX/UI portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
