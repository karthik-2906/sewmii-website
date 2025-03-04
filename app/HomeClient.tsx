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

    useEffect(() => {
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
        touchThreshold: 30
    };

    const settingsxl = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: false,
        speed: 500,
        dots: true
    };

    const settings = windowWidth < 768 ? settingssm : settingsxl;

    return (
        <Box component={'div'}>
            <Box margin={{ margin: '96px 16px 0', lg: '96px auto 0' }} maxWidth="1248px">
                <Typography variant="h2" fontFamily={'Source Sans Bold'}>Under Development</Typography>
                <Link href="https://shopee.ph/sewmii" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1} marginTop={4} >
                    <Image src={"/icons/shopee.svg"} alt={'Shopee logo'} height={32} width={32} style={{ display: 'block' }} />
                    <Typography variant="h5" fontFamily={'Source Sans Regular'}>Shopee</Typography>
                </Link>
                <Link href="https://www.tiktok.com/@sewmii.studio" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1} marginTop={4} >
                    <Image src={"/icons/tiktok.svg"} alt={'Shopee logo'} height={32} width={32} style={{ display: 'block' }} />
                    <Typography variant="h5" fontFamily={'Source Sans Regular'}>Tiktok</Typography>
                </Link>
            </Box>
            {windowWidth > 0 && (
                <Box component={'div'} paddingBottom={'25px'} marginTop={'16px'}>
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
