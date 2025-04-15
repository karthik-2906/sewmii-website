import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingMenu from "./components/FloatingMenu";

const desc = "Sewmii Pattern Studio - Love sewing but not patternmaking? Our patterns make it easy to create beautiful clothes at home or for your garment business. Shop printed sewing patterns from a pattern maker in the Philippines. Easy, beginner-friendly, and ready to sew.";

export const metadata: Metadata = {
    title: "sewmii",
    description: `${desc}`,
    keywords: "sewing patterns, printed sewing patterns, pattern maker Philippines, patternmaker, sewing for beginners, garment business sewing, DIY clothing, philippines, manila, buy sewing patterns online, sewing patterns for beginners, clothing sewing patterns, fashion design patterns, sewing patterns Manila, Filipino pattern maker, DIY fashion patterns",
    openGraph: {
        title: 'sewmii',
        description: `${desc}`,
    },
    icons: {
        icon: "/logos/sewmii-logo-square-light.png",
        apple: "/logos/sewmii-logo-square-light.png",
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
                <FloatingMenu />
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
