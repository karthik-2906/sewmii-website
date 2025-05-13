import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getMensProducts } from "@/app/utils/getMensProducts";
import MenProductsPage from "./MenProductsClients";

export default async function Page() {
    notFound();

    const { blocks, shirts, pants } = await getMensProducts();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MenProductsPage initialBlocks={blocks} initialShirts={shirts} initialPants={pants} />
        </Suspense>
    );
}
