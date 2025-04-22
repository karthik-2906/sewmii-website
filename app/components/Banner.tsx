import Image from "next/image";
import { Box } from "@mui/material";

interface BannerProps {
    image: string;
    imageAlt?: string;
}

export default function Banner({
    image,
    imageAlt = 'banner-img'
}: BannerProps) {
    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: {
                xs: 'auto', // Mobile: auto height
                md: 'calc(100vh - 94px)' // Desktop: full height minus header
            },
            aspectRatio: {  // Add aspect ratio for mobile
                xs: '1/1', // Common banner ratio (adjust as needed)
                md: 'unset' // Disable on desktop
            }
        }}>
            <Image
                src={image}
                alt={imageAlt}
                fill
                style={{
                    objectFit: 'cover'
                }}
                priority
            />
        </Box>
    );
}