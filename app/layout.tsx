import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingMenu from "./components/FloatingMenu";
import SizeGuideDrawer from "./components/SizeGuideDrawer";

// const desc = "Sewmii Pattern Studio - Love sewing but not patternmaking? Our patterns make it easy to create beautiful clothes at home or for your garment business. Shop printed sewing patterns from a pattern maker in the Philippines. Easy, beginner-friendly, and ready to sew.";

const desc = "Sewmii Pattern Studio – Love sewing but not patternmaking? Our beginner-friendly digital and printed sewing patterns make it easy to create beautiful clothing at home or for your garment business. Designed by a Filipino pattern maker, each pattern is ready to sew, easy to follow, and perfect for DIY fashion."

export const metadata: Metadata = {
    title: "Digital Sewing Patterns for Beginners & Small Brands | sewmii",
    description: `${desc}`,
    // keywords: "sewing patterns, printed sewing patterns, pattern maker Philippines, patternmaker, sewing for beginners, garment business sewing, DIY clothing, philippines, manila, buy sewing patterns online, sewing patterns for beginners, clothing sewing patterns, fashion design patterns, sewing patterns Manila, Filipino pattern maker, DIY fashion patterns, corset pattern, corset sewing pattern, DIY corset",
    keywords: "digital sewing patterns Philippines, PDF corset pattern download, Filipino pattern maker online, DIY clothing patterns beginner, buy sewing patterns Manila, structured corset sewing pattern, easy PDF fashion patterns",
    openGraph: {
        title: 'Digital Sewing Patterns for Beginners & Small Brands | sewmii',
        description: `${desc}`,
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico",
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
                <SizeGuideDrawer />
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
