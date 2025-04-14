import { Suspense } from "react";
import { getWomensProducts } from "@/app/utils/getWomensProducts";
import HomeClient from "./HomeClient";

export default async function HomePage() {
    const { corsets } = await getWomensProducts();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeClient initialCorsets={corsets} />
        </Suspense>
    );
}
