import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading/loading";
import { AuthProvider } from "./AuthProvider";
import { Toaster } from "react-hot-toast";

const rubik = Rubik({
    weight: ["300", "400", "500", "700", "900"],
    variable: "--font-rubik",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "CustomHero.com",
    description: "Create Custom SuperHeroes!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!smooth-scroll">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </head>
            <body className={`${rubik.variable} antialiased`}>
                {" "}
                <Suspense fallback={<Loading />}>
                    <AuthProvider>
                        <main className=" ">
                            <div className="">{children}</div>
                        </main>
                    </AuthProvider>
                </Suspense>
                <Toaster
                    position="top-center"
                    toastOptions={{
                        style: {
                            width: "800px",
                            maxWidth: "100%",
                        },
                    }}
                />
            </body>
        </html>
    );
}
