import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { HeroContextProvider } from "@/contexts/heroContext";
import { Suspense } from "react";
import Loading from "./loading/loading";

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
    <html lang="en">
      <body className={`${rubik.variable} antialiased `}>
        {" "}
        <Suspense fallback={<Loading />}>
          <HeroContextProvider>
            <main className="bg-[url('../../public/city-backdrop.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
              <div className="overlay">{children}</div>
            </main>
          </HeroContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
