import { Suspense } from "react";
import { getWomensProducts } from "@/app/utils/getWomensProducts";
import WomenProductsPage from "./WomenProductsClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Women's Collection - Sewing Patterns | sewmii",
    description: "Browse our premium women's sewing patterns for corsets, dresses, tops, and more. Perfect for home sewists and designers."
};

export default async function Page() {
    const { corsets } = await getWomensProducts();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <WomenProductsPage initialCorsets={corsets} />
        </Suspense>
    );
}
