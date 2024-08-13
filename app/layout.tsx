import type { Metadata } from "next";

// styles
import "./styles/globals.css";
import { inter } from "./styles/fonts";

export const metadata: Metadata = {
  title: "CVRator",
  description: "Generate your CV with AI"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
