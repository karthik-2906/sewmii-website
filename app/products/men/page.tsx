'use client'

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import Typography from "@mui/material/Typography";
import ProductCard from "@/app/components/ProductCard";

type CarouselImage = {
    src: string;
    alt: string;
};

type Product = {
    id: string;
    title: string;
    desc: string;
    link: string;
    carouselImages: CarouselImage[];
};

function Home() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const queryTab = searchParams.get("tab");
    const [value, setValue] = useState(queryTab || "basic-blocks");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        router.replace(`?tab=${newValue}`, { scroll: false });
    };

    const [blocksData, setBlocksData] = useState<Product[]>([]);
    const [shirtsData, setShirtsData] = useState<Product[]>([]);
    const [pantsData, setPantsData] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/data/men-basic-blocks.json")
            .then(response => response.json())
            .then(blocksData => setBlocksData(blocksData));
    }, []);

    useEffect(() => {
        fetch("/data/men-shirts.json")
            .then(response => response.json())
            .then(shirtsData => setShirtsData(shirtsData));
    }, []);

    useEffect(() => {
        fetch("/data/men-pants.json")
            .then(response => response.json())
            .then(pantsData => setPantsData(pantsData));
    }, []);

    useEffect(() => {
        if (queryTab && queryTab !== value) {
            setValue(queryTab);
        }
    }, [queryTab]);

    return (
        <Box component="div" marginTop={10}>
            <Typography variant="h5" component="h2" sx={{ fontFamily: "Source Sans Bold", padding: "0 16px" }}>
                Men&apos;s Products
            </Typography>
            <TabContext value={value}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{ marginTop: 3, padding: "0 16px" }}
                >
                    <Tab label="Basic Blocks" value="basic-blocks" sx={{ fontFamily: "Source Sans Bold", fontSize: "1rem" }} />
                    <Tab label="Shirts" value="shirts" sx={{ fontFamily: "Source Sans Bold", fontSize: "1rem" }} />
                    <Tab label="Pants" value="pants" sx={{ fontFamily: "Source Sans Bold", fontSize: "1rem" }} />
                </Tabs>
                <TabPanel value="basic-blocks" keepMounted={true} sx={{ padding: 0 }}>
                    <Box component="div" marginTop={4} display="flex" flexDirection="column" gap={4} padding="0 16px">
                        {blocksData.map(product => (
                            <ProductCard key={product.id} title={product.title} desc={product.desc} link={product.link} carouselImages={product.carouselImages} />
                        ))}
                    </Box>
                </TabPanel>
                <TabPanel value="shirts" keepMounted={true} sx={{ padding: 0 }}>
                    <Box component="div" marginTop={4} display="flex" flexDirection="column" gap={4} padding="0 16px">
                        {shirtsData.map(product => (
                            <ProductCard key={product.id} title={product.title} desc={product.desc} link={product.link} carouselImages={product.carouselImages} />
                        ))}
                    </Box>
                </TabPanel>
                <TabPanel value="pants" keepMounted={true} sx={{ padding: 0 }}>
                    <Box component="div" marginTop={4} display="flex" flexDirection="column" gap={4} padding="0 16px">
                        {pantsData.map(product => (
                            <ProductCard key={product.id} title={product.title} desc={product.desc} link={product.link} carouselImages={product.carouselImages} />
                        ))}
                    </Box>
                </TabPanel>
            </TabContext>
        </Box>
    );
}

export default function SuspendedHome() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
