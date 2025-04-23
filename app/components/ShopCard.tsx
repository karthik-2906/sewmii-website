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
            padding={2}
        >
            <Box display="flex" gap={1} alignItems="center">
                {image && (
                    <Image
                        src={image}
                        alt={imageAlt}
                        height={32}
                        width={32}
                        style={{
                            // border: "3px solid var(--color-secondary)",
                            borderRadius: 4,
                            // padding: image === '/icons/shopee-color.svg' ? 2 : 0
                        }}
                    />
                )}
                <Typography variant="h5" fontFamily="Source Sans Bold" fontWeight={700} textTransform={'uppercase'}>
                    {title}
                </Typography>
            </Box>

            <Typography variant="h6" fontFamily="Source Sans Bold" mt={1}>
                {shopName}
            </Typography>

            <Typography variant="subtitle1" fontFamily="Source Sans Bold">
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
                        <Image
                            src={locationImage}
                            alt={locationImageAlt}
                            height={24}
                            width={24}
                        />
                    )}
                    <Typography
                        variant="subtitle2"
                        fontFamily="Source Sans Bold"
                        fontSize="1rem"
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
                    fontSize: "1.25rem",
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
