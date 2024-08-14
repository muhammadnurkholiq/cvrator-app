import "./styles/globals.css";

import type { Metadata } from "next";
import Link from "next/link";

// styles
import { robotoSlab } from "./styles/fonts";

import { BackgroundBeams } from "./components/background-beams";

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
      <body
        className={`${robotoSlab.className} relative h-[100vh] bg-background-main overflow-hidden`}
      >
        <div className="px-10 relative z-10 h-[100%]">
          <div className="h-[10%] flex text-center justify-center items-center">
            <Link href="/">
              <p className={"text-4xl text-primary-contrastText"}>
                <span className="text-primary-main">CV</span>RATOR
              </p>
            </Link>
          </div>
          <div className="h-[75%] max-h-[75%">{children}</div>
          <div className="h-[10%] flex text-center justify-center items-center">
            <p className={"text-sm text-primary-contrastText"}>
              &copy; 2024 <span className="text-primary-main">Wacana Cuan</span>
              . All rights reserved.
            </p>
          </div>
        </div>
        <BackgroundBeams />
      </body>
    </html>
  );
}
