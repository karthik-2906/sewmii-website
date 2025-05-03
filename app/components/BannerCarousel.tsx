import { Box, Typography } from "@mui/material";
import Image from "next/image";

const CarouselItem = ({ banner }: { banner: { id: number; image: string; title: string } }) => (
    <Box
        display={'inline-flex'}
        gap={1}
        alignItems={'center'}
        height={'100%'}
        width={{
            lg: 'calc(100vw/5)',
            md: 'calc(100vw/4)',
            sm: 'calc(100vw/3)',
            xs: 'calc(100vw/2)'
        }}
        justifyContent={'center'}
    >
        <Image src={banner.image} width={48} height={48} alt={banner.title} />
        <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={20}>
            {banner.title}
        </Typography>
    </Box>
);

export default function BannerCarousel() {
    const bannerCarousel = [
        { id: 1, image: '/images/banner-carousel/dollar.svg', title: 'Dollar' },
        { id: 2, image: '/images/banner-carousel/euro.svg', title: 'Euro' },
        { id: 3, image: '/images/banner-carousel/peso.svg', title: 'Peso' },
        { id: 4, image: '/images/banner-carousel/rupee.svg', title: 'Rupee' },
        { id: 5, image: '/images/banner-carousel/sewing-machine.svg', title: 'Sewing Machine' },
        { id: 6, image: '/images/banner-carousel/scissor.svg', title: 'Scissor' },
    ];

    return (
        <Box
            className='banner-carousel'
            mt={3} whiteSpace={'nowrap'}
            height={80}
            // sx={{ background: 'var(--color-secondary)', color: 'white' }}
        >
            {Array(2).fill(null).map((_, i) => (
                <Box
                    key={`carousel-slide-${i}`}
                    className='banner-carousel-slide'
                    display={'inline-block'}
                    height={'100%'}
                    sx={{ animation: '20s slide infinite linear' }}
                >
                    {bannerCarousel.map((banner) => (
                        <CarouselItem key={`${banner.id}-${i}`} banner={banner} />
                    ))}
                </Box>
            ))}
        </Box>
    );
}