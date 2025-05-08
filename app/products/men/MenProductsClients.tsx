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
import { mensProductCategories, ProductCardInfo } from "@/public/data/productCategories";

type ProductData = {
    blocks: ProductCardInfo[];
    shirts: ProductCardInfo[];
    pants: ProductCardInfo[];
};

export default function MenProductsPage({
    initialBlocks,
    initialShirts,
    initialPants,
}: {
    initialBlocks: ProductCardInfo[];
    initialShirts: ProductCardInfo[];
    initialPants: ProductCardInfo[];
}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const queryTab = searchParams.get("tab");
    const [value, setValue] = useState(queryTab || mensProductCategories[0].value);

    const productData: ProductData = {
        blocks: initialBlocks,
        shirts: initialShirts,
        pants: initialPants
    };

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
                <Tabs value={value} onChange={handleChange} sx={{
                    marginTop: '24px',
                    '& .MuiTabs-flexContainer': {
                        gap: { gap: '8px', md: '16px' },
                    }
                }}>
                    {mensProductCategories.map((category) => (
                        <Tab
                            key={category.value}
                            label={category.label}
                            value={category.value}
                            sx={{ fontFamily: "Source Sans Bold", fontSize: "1rem" }}
                        />
                    ))}
                </Tabs>
                
                {mensProductCategories.map((category) => (
                    <TabPanel key={category.value} value={category.value} keepMounted={true} sx={{ padding: 0 }}>
                        <Box component="div" marginTop={4} display="flex" flexDirection={{ flexDirection: "column", sm: "row" }} flexWrap={"wrap"} gap={{ gap: "32px", sm: "16px" }}>
                            {productData[category.value as keyof ProductData]?.map((product) => (
                                <ProductCard 
                                    key={product.id} 
                                    title={product.title} 
                                    desc={product.desc} 
                                    shopeeLink={product.shopeeLink}
                                    etsyLink={product.etsyLink}
                                    carouselImages={product.carouselImages} 
                                />
                            ))}
                        </Box>
                    </TabPanel>
                ))}
            </TabContext>
        </Box>
    );
}