"use client";

import { useState, useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import TestimonialCard from "./components/TestimonialCard";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import Button3D from "./components/Button3D";
// import BannerCarousel from "./components/BannerCarousel";
import { ProductCardInfo } from "@/public/data/productCategories";
import { listItemIcon } from "@/public/data/images";

type Testimonial = {
    name: string;
    review: string;
    image: string;
};

export default function HomeClient({
    initialTestimonials,
    featuredProducts,
}: {
    initialTestimonials: Testimonial[],
    featuredProducts: ProductCardInfo[]
}) {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const services = [
        "Digital Patterns",
        "Physical Patterns*",
        "Custom Exclusive Patterns"
    ];

    const settings = windowWidth >= 900 ? {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500
    } : windowWidth >= 600 ? {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        touchThreshold: 30,
    } : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        touchThreshold: 30,
    };

    return (
        <Box
            component="div"
            className="main-container"
            padding={{ xs: '62px 0 0', md: '94px 0 0' }}
        >
            {/* Banner */}
            <Banner image="/images/banner shadow test img.png" />
            <Banner image="/images/banner shadow test img mobile.png" mobile />

            {/* Banner Carousel */}
            {/* <BannerCarousel /> */}

            {/* Intro */}
            <Box
                margin={{ xs: '32px 16px 0', md: '48px 16px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'}>Under Development</Typography>
                <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={'1.25rem'} marginTop={2} marginBottom={2}>The website is under development and certain links will not work</Typography>
            </Box>

            <Box
                margin={{ xs: '32px 16px 0', md: '48px 16px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'}>Sewmii Pattern Studio</Typography>
                <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={'1.25rem'} marginTop={2} marginBottom={2}>Love sewing but not patternmaking? Our patterns make it easy to create beautiful clothes at home or for your garment business. Shop printed sewing patterns from a pattern maker in the Philippines. Easy, beginner-friendly, and ready to sew.</Typography>
            </Box>

            {/* Services Teaser */}
            <Box
                margin={{ xs: '32px 16px 0', md: '48px 16px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
                display="flex"
                justifyContent="space-between"
                gap={{
                    xs: 0,
                    md: 4
                }}
                flexDirection={{
                    xs: 'column',
                    sm: 'row'
                }}
            >
                <Box
                    position="relative"
                    flex="1"
                    width="100%"
                    sx={{
                        aspectRatio: 1
                    }}
                >
                    <Image
                        src="/images/teaser-img.jpg"
                        alt="services-teaser-image"
                        fill
                        style={{ objectFit: 'cover', borderRadius: 16 }}
                    />
                </Box>

                <Box flex="1" padding={{ xs: '32px 0', sm: 4 }} alignContent={'center'}>
                    <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'}>Our Services</Typography>
                    <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={{ xs: 16, md: 20 }} marginTop={2} marginBottom={2}>We offer a wide array of services to help bring your creative ideas to life.</Typography>
                    <Box className='list-container' display={'flex'} flexDirection={'column'} gap={2}>
                        {services.map((title, index) => (
                            <Box key={index} display={'flex'} gap={1} alignItems={'center'}>
                                {listItemIcon}
                                <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={{ xs: 16, md: 20 }}>
                                    {title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} color={'gray'} fontSize={14} marginTop={2} marginBottom={2}>*Physical printed patterns exclusively on Shopee in the Philippines, Singapore, and Malaysia.</Typography>
                    <Button3D href="/services" newTab={false}>View Services</Button3D>
                </Box>
            </Box>

            {/* Featured Products */}
            <Box
                className='featured-products-container'
                margin={{ xs: '32px 16px 0', md: '48px 16px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant='h2' fontFamily={'Source Sans Bold'} fontSize={'2rem'}>Featured Products</Typography>
                <Box
                    component="div"
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: {
                            xs: '16px',
                            md: '24px'
                        },
                        marginTop: 3
                    }}
                >
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </Box>
            </Box>

            {/* Testimonies */}
            {isClient && windowWidth > 0 && (
                <Box
                    component={'div'}
                    className='testimonial-cards-container'
                    paddingBottom={'25px'}
                    margin={{
                        xs: '32px 0 0',
                        sm: '48px 0 0 16px',
                        lg: '64px auto 0 auto'
                    }}
                    maxWidth={'1264px'}
                >
                    <Slider {...settings}>
                        {initialTestimonials.map((testimony, index) => (
                            <TestimonialCard key={index} {...testimony} />
                        ))}
                    </Slider>
                </Box>
            )}
        </Box>
    );
}