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
import { ProductCardInfo, womensProductCategories } from "@/public/data/productCategories";

type ProductData = {
    corsets: ProductCardInfo[];
};

export default function WomenProductsPage({
    initialCorsets,
}: {
    initialCorsets: ProductCardInfo[];
}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const queryTab = searchParams.get("tab");
    const [value, setValue] = useState(queryTab || womensProductCategories[0].value);

    const productData: ProductData = {
        corsets: initialCorsets
    };

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        router.replace(`?tab=${newValue}`, { scroll: false });
    };

    return (
        <Box
            component="div"
            className="main-container"
            padding={{ xs: '62px 0 0', md: '94px 0 0' }}
        >

            {/* Womens Products */}
            <Box
                className='womens-products-container'
                margin={{ xs: '32px 16px 0', md: '48px 16px 0', lg: '48px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant="h5" component="h2" fontFamily={"Source Sans Bold"} fontSize={"2rem"}>
                    Women&apos;s Products
                </Typography>
                <TabContext value={value}>
                    <Tabs value={value} onChange={handleChange} sx={{
                        marginTop: '24px',
                        '& .MuiTabs-flexContainer': {
                            gap: { gap: '8px', md: '16px' },
                        }
                    }}>
                        {womensProductCategories.map((category) => (
                            <Tab
                                key={category.value}
                                label={category.label}
                                value={category.value}
                                sx={{ fontFamily: "Source Sans Bold", fontSize: "1rem" }}
                            />
                        ))}
                    </Tabs>

                    {womensProductCategories.map((category) => (
                        <TabPanel key={category.value} value={category.value} keepMounted={true} sx={{ padding: 0 }}>
                            <Box
                                component="div"
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        sm: 'repeat(2, 1fr)',
                                        md: 'repeat(3, 1fr)',
                                    },
                                    gap: '24px',
                                    marginTop: 4
                                }}
                            >
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
        </Box>
    );
}