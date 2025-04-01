"use client";

import { useState } from "react";
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

export default function HomeClient({
    initialBlocks,
    initialShirts,
    initialPants,
}: {
    initialBlocks: Product[];
    initialShirts: Product[];
    initialPants: Product[];
}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const queryTab = searchParams.get("tab");
    const [value, setValue] = useState(queryTab || "basic-blocks");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        router.replace(`?tab=${newValue}`, { scroll: false });
    };

    return (
        <Box component="div" maxWidth={"1248px"} margin={{ margin: '96px 16px 0', md: '120px 16px 0', lg: '120px auto 0' }}>
            <Typography variant="h5" component="h2" fontFamily={"Source Sans Bold"} fontSize={"2rem"}>
                Men&apos;s Products
            </Typography>
            <TabContext value={value}>
                <Tabs value={value} onChange={handleChange} sx={{ marginTop: 3 }}>
                    <Tab label="Basic Blocks" value="basic-blocks" sx={{ fontFamily: "Source Sans Bold", fontSize: "1rem" }} />
                    <Tab label="Shirts" value="shirts" sx={{ fontFamily: "Source Sans Bold", fontSize: "1rem" }} />
                    <Tab label="Pants" value="pants" sx={{ fontFamily: "Source Sans Bold", fontSize: "1rem" }} />
                </Tabs>
                <TabPanel value="basic-blocks" keepMounted={true} sx={{ padding: 0 }}>
                    <Box component="div" marginTop={4} display="flex" flexDirection={{ flexDirection: "column", sm: "row" }} flexWrap={"wrap"} gap={{ gap: "32px", sm: "16px" }}>
                        {initialBlocks.map((product) => (
                            <ProductCard key={product.id} title={product.title} desc={product.desc} link={product.link} carouselImages={product.carouselImages} />
                        ))}
                    </Box>
                </TabPanel>
                <TabPanel value="shirts" keepMounted={true} sx={{ padding: 0 }}>
                    <Box component="div" marginTop={4} display="flex" flexDirection={{ flexDirection: "column", sm: "row" }} flexWrap={"wrap"} gap={{ gap: "32px", sm: "16px" }}>
                        {initialShirts.map((product) => (
                            <ProductCard key={product.id} title={product.title} desc={product.desc} link={product.link} carouselImages={product.carouselImages} />
                        ))}
                    </Box>
                </TabPanel>
                <TabPanel value="pants" keepMounted={true} sx={{ padding: 0 }}>
                    <Box component="div" marginTop={4} display="flex" flexDirection={{ flexDirection: "column", sm: "row" }} flexWrap={"wrap"} gap={{ gap: "32px", sm: "16px" }}>
                        {initialPants.map((product) => (
                            <ProductCard key={product.id} title={product.title} desc={product.desc} link={product.link} carouselImages={product.carouselImages} />
                        ))}
                    </Box>
                </TabPanel>
            </TabContext>
        </Box>
    );
}
