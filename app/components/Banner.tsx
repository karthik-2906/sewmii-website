'use client'

import Image from "next/image";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface BannerProps {
    image: string;
    imageMobile: string;
    imageAlt?: string;
}

export default function Banner({
    image,
    imageMobile,
    imageAlt = "banner-img",
}: BannerProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: {
                    xs: "auto",
                },
            }}
        >
                <Image
                    src={imageMobile}
                    alt={imageAlt}
                    width={400}
                    height={400}
                    loading="eager"
                    style={{
                        objectFit: "cover",
                        position: "unset",
                        width: "100%",
                        height: "100%",
                        display: isMobile ? 'block' : 'none'
                    }}
                />
                <Image
                    src={image}
                    alt={imageAlt}
                    width={1200}
                    height={400}
                    loading="eager"
                    style={{
                        objectFit: "cover",
                        position: "unset",
                        width: "100%",
                        height: "100%",
                        display: isMobile ? 'none' : 'block'
                    }}
                />
        </Box>
    );
}
