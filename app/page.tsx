'use client'

import React, { useEffect, useState } from "react";
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
};

export default function Home() {
    const [testimonialData, setTestimonialData] = useState<Testimonial[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        fetch("/data/testimonials.json")
            .then((response) => response.json())
            .then((testimonialData) => setTestimonialData(testimonialData));
    }, []);

    const settingssm = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // slidesToScroll: 1,
        // adaptiveHeight: true,
    };

    const settingsxl = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
    };

    const settings = windowWidth < 768 ? settingssm : settingsxl;

    return (
        <Box component={'div'}>
            <Box component={'div'} margin={'96px 16px 0'}>
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
                <Box component={'div'} marginBottom={'25px'}>
                    <Slider {...settings}>
                        {testimonialData.map((testimony, index) => (
                            <TestimonialCard key={index} name={testimony.name} review={testimony.review} />
                        ))}
                    </Slider>
                </Box>
            )}
        </Box>
    );
}
