'use client'

import Image from "next/image";
import { Box } from "@mui/material";

interface BannerProps {
    image: string;
    imageAlt?: string;
    mobile?: boolean;
}

export default function Banner({
    image,
    imageAlt = "banner-img",
    mobile = false,
}: BannerProps) {

    return (
        <Box
            sx={{
                display: mobile
                    ? { xs: 'block', sm: 'none' }
                    : { xs: 'none', sm: 'block' },
                position: "relative",
                width: "100%",
                height: {
                    xs: "auto",
                },
            }}
        >
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
                }}
            />
        </Box>
    );
}