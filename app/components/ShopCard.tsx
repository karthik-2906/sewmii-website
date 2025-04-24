import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

interface ShopCardProps {
    title: string;
    shopName: string;
    shopDesc: string;
    link: string;
    image: string;
    imageAlt?: string;
    location: string;
    locationImage: string;
    locationImageAlt?: string;
}

export default function ShopCard({
    title,
    shopName,
    shopDesc,
    link,
    image,
    imageAlt = "shop-image",
    location,
    locationImage,
    locationImageAlt = "country-icon",
}: ShopCardProps) {
    return (
        <Box
            className="shop-card"
            border="3px solid var(--color-secondary)"
            borderRadius={1}
            padding={{ xs: 1.5, sm: 2 }}
        >
            <Box display="flex" gap={1} alignItems="center">
                {image && (
                    <Box
                        sx={{
                            width: { xs: 20, sm: 32 },
                            height: { xs: 20, sm: 32 },
                        }}
                    >
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={32}
                            height={32}
                            style={{ width: '100%', height: '100%', borderRadius: 4 }}
                        />
                    </Box>
                )}

                <Typography variant="h5" fontFamily="Source Sans Bold" fontWeight={700} textTransform={'uppercase'} fontSize={{ xs: 18, sm: 24 }}>
                    {title}
                </Typography>
            </Box>

            <Typography variant="h6" fontFamily="Source Sans Bold" mt={1} fontSize={{ xs: 16, sm: 20 }}>
                {shopName}
            </Typography>

            <Typography
                variant="subtitle1"
                fontFamily="Source Sans Bold"
                fontSize={{ xs: 14, sm: 16 }}
            >
                {shopDesc}
            </Typography>

            {location && (
                <Box
                    display="inline-flex"
                    gap={1}
                    sx={{
                        backgroundColor: '#E9DFC3',
                        border: "3px solid var(--color-secondary)",
                        borderRadius: 1,
                        padding: "4px 8px",
                        alignItems: "center",
                        mt: 1,
                    }}
                >
                    {locationImage && (
                        <Box
                            sx={{
                                width: { xs: 20, sm: 24 },
                                height: { xs: 20, sm: 24 },
                            }}
                        >
                            <Image
                                src={locationImage}
                                alt={locationImageAlt}
                                height={24}
                                width={24}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Box>
                    )}
                    <Typography
                        variant="subtitle2"
                        fontFamily="Source Sans Bold"
                        fontSize={{ xs: 14, sm: 16 }}
                    >
                        {location}
                    </Typography>
                </Box>
            )}

            <Link
                href={link ?? "#"}
                sx={{
                    display: "block",
                    textDecoration: "none",
                    textAlign: "center",
                    color: "var(--color-primary)",
                    fontFamily: "Source Sans Bold",
                    fontWeight: 700,
                    fontSize: { xs: 16, sm: 20 },
                    border: "3px solid var(--color-secondary)",
                    borderRadius: 1,
                    padding: "4px 0",
                    mt: 1.5,
                    transition: '0.3s ease-in-out',
                    "&:hover": {
                        background: "#efc608",
                    },
                }}
            >
                VISIT SHOP
            </Link>
        </Box>
    );
}
