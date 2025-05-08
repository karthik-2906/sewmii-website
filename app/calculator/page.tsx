import { Metadata } from "next";
import CalculatorPage from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Sewing Pattern Calculator | Measure, Convert & Scale | sewmii",
    description: "Free online sewing calculator for pattern measurements, size conversions, and fabric yardage. Perfect for dressmaking, quilting, and DIY fashion projects.",
    keywords: [
        "sewing calculator",
        "pattern measurement tool",
        "fabric yardage calculator",
        "sewing math converter",
        "dressmaking calculations",
        "quilting measurements",
        "sewing project planner"
    ]
}

export default function Page() {
    return <CalculatorPage />
}