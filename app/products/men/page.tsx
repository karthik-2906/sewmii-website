import { Suspense } from "react";
import { getMensProducts } from "@/app/lib/getMensProducts";
import HomeClient from "./HomeClient";

export default async function HomePage() {
    const { blocks, shirts, pants } = await getMensProducts();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeClient initialBlocks={blocks} initialShirts={shirts} initialPants={pants} />
        </Suspense>
    );
}
