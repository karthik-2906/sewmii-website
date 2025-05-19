import { Suspense } from "react";
import { getWomensProducts } from "@/app/utils/getWomensProducts";
import WomenProductsPage from "./WomenProductsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Women's Collection - Sewing Patterns | sewmii",
    description: "Browse our premium women's sewing patterns for corsets, dresses, tops, and more. Perfect for home sewists and designers.",
    keywords: "PDF corset sewing pattern for women, digital corset pattern download, easy structured corset pattern, DIY corset sewing kit PDF, printable corset pattern beginner-friendly, Filipino-made corset pattern, corset sewing pattern PDF women"
};

export default async function Page() {
    const { corsets } = await getWomensProducts();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <WomenProductsPage initialCorsets={corsets} />
        </Suspense>
    );
}
