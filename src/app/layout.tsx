import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { HeroContextProvider } from "@/contexts/heroContext";
import { Suspense } from "react";
import Loading from "./loading/loading";
import { AuthProvider } from "./AuthProvider";

const rubik = Rubik({
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuperHero Stats V2",
  description: "SuperHero Stats has been ported to Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!smooth-scroll">
      <body className={`${rubik.variable} antialiased `}>
        {" "}
        <Suspense fallback={<Loading />}>
          <AuthProvider>
            <HeroContextProvider>
              <main className=" ">
                <div className="">{children}</div>
              </main>
            </HeroContextProvider>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
