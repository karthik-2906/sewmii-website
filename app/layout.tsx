import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
    title: "sewmii",
    description: "Sewmii pattern studios",
    icons: {
        icon: "/logos/sewmii-logo-square.png",
        apple: "/logos/sewmii-logo-square.png", // Optional for Apple devices
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
