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
        className={`${robotoSlab.className} min-h-[100vh] max-w-[100vw] bg-background-main overflow-x-hidden`}
      >
        <div className="px-10 min-h-[100vh] relative flex flex-col justify-between items-center z-20">
          {/* Header Section */}
          <div className="h-[10%] flex text-center justify-center items-center mb-10 pt-10 no-print">
            <Link href="/">
              <p className={"text-2xl md:text-3xl text-primary-contrastText"}>
                <span className="text-primary-main">CV</span>RATOR
              </p>
            </Link>
          </div>

          {/* Middle Content Section */}
          <div className="flex justify-center items-center w-[100%] md:w-[80%] xl:w-[70%] h-auto">
            {children}
          </div>

          {/* Footer Section (Copyright) */}
          <div className="h-[10%] flex text-center justify-center items-center mt-10 pb-10 no-print">
            <p className={"text-sm text-primary-contrastText"}>
              &copy; 2024 <span className="text-blood-20">Wacana Cuan</span>.
              All rights reserved.
            </p>
          </div>
        </div>
        <BackgroundBeams />
      </body>
    </html>
  );
}
