"use client";

import { useState, useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Image from 'next/image';
import TestimonialCard from "./components/TestimonialCard";

type Testimonial = {
    name: string;
    review: string;
    image: string;
};

export default function HomeClient({ initialTestimonials }: { initialTestimonials: Testimonial[] }) {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settingssm = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        touchThreshold: 30,
    };

    const settingslg = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        touchThreshold: 30,
    };

    const settingsxl = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        swipe: false
    };

    let settings;

    if (windowWidth >= 900) {
        settings = settingsxl;
    } else if (windowWidth < 900 && windowWidth >= 600) {
        settings = settingslg;
    } else settings = settingssm;

    return (
        <Box component={'div'}>
            <Box margin={{ margin: '96px 16px 0', md: '120px 16px 0', lg: '120px auto 0' }} maxWidth="1248px">
                <Typography variant="h2" fontFamily={'Source Sans Bold'}>Under Development</Typography>
                <Box display={'flex'} gap={8}>
                    <Link href="https://shopee.ph/sewmii" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1} marginTop={4}>
                        <Image src={"/icons/shopee.svg"} alt={'Shopee logo'} height={32} width={32} style={{ display: 'block' }} />
                        <Typography variant="h5" fontFamily={'Source Sans Regular'}>Shopee PH</Typography>
                    </Link>
                    <Link href="https://shopee.sg/sewmiiro.sg" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1} marginTop={4}>
                        <Image src={"/icons/shopee.svg"} alt={'Shopee logo'} height={32} width={32} style={{ display: 'block' }} />
                        <Typography variant="h5" fontFamily={'Source Sans Regular'}>Shopee SG</Typography>
                    </Link>
                    <Link href="https://shopee.com.my/sewmiina.my" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1} marginTop={4}>
                        <Image src={"/icons/shopee.svg"} alt={'Shopee logo'} height={32} width={32} style={{ display: 'block' }} />
                        <Typography variant="h5" fontFamily={'Source Sans Regular'}>Shopee MY</Typography>
                    </Link>
                </Box>
                <Link href="https://www.tiktok.com/@sewmii.studio" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1} marginTop={4}>
                    <Image src={"/icons/tiktok.svg"} alt={'Tiktok logo'} height={32} width={32} style={{ display: 'block' }} />
                    <Typography variant="h5" fontFamily={'Source Sans Regular'}>Tiktok</Typography>
                </Link>
            </Box>
            {isClient && windowWidth > 0 && (
                <Box component={'div'} paddingBottom={'25px'} margin={{ margin: '16px 0 0', sm: '16px 0 0 16px', lg: '16px auto 0' }} maxWidth={'1264px'}>
                    <Slider {...settings}>
                        {initialTestimonials.map((testimony, index) => (
                            <TestimonialCard key={index} name={testimony.name} review={testimony.review} image={testimony.image} />
                        ))}
                    </Slider>
                </Box>
            )}
        </Box>
    );
}