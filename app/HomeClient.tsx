"use client";

import { useState, useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import TestimonialCard from "./components/TestimonialCard";
import Banner from "./components/Banner";
import { ProductCardInfo } from "@/public/data/productCategories";
import { Box, Link, Typography } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductCard from "./components/ProductCard";

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
        <Box component={'div'} className='main-container' margin={{ margin: '62px 0 0', md: '94px 0 0', lg: '94px 0 0' }}>

            {/* Banner */}
            <Banner image="/images/sewmii-banner.jpg" />

            {/* Quick links */}
            <Box margin={{ margin: '48px 16px 0', md: '48px 16px 0', lg: '48px auto 0' }} maxWidth="1248px">
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'}>Under Development</Typography>
                <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={'1.25rem'} marginTop={2} marginBottom={2}>The website is under development and certain links will not work</Typography>
                <Box display={'flex'} gap={4} flexDirection={{ flexDirection: 'column', sm: 'row' }} flexWrap={'wrap'}>
                    <Link href="https://shopee.ph/sewmii" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1}>
                        <Image src={"/icons/shopee.svg"} alt={'Shopee logo'} height={32} width={32} style={{ display: 'block' }} />
                        <Typography variant="h5" fontFamily={'Source Sans Regular'}>Shopee PH</Typography>
                    </Link>
                    <Link href="https://shopee.sg/sewmiiro.sg" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1}>
                        <Image src={"/icons/shopee.svg"} alt={'Shopee logo'} height={32} width={32} style={{ display: 'block' }} />
                        <Typography variant="h5" fontFamily={'Source Sans Regular'}>Shopee SG</Typography>
                    </Link>
                    <Link href="https://shopee.com.my/sewmiina.my" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1}>
                        <Image src={"/icons/shopee.svg"} alt={'Shopee logo'} height={32} width={32} style={{ display: 'block' }} />
                        <Typography variant="h5" fontFamily={'Source Sans Regular'}>Shopee MY</Typography>
                    </Link>
                    <Link href="https://www.tiktok.com/@sewmii.studio" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1}>
                        <Image src={"/icons/tiktok.svg"} alt={'Tiktok logo'} height={32} width={32} style={{ display: 'block' }} />
                        <Typography variant="h5" fontFamily={'Source Sans Regular'}>Tiktok</Typography>
                    </Link>
                </Box>
            </Box>

            {/* Featured Products */}
            <Box className='featured-products-container' margin={{ margin: '48px 16px 0 ', md: '48px 16px 0', lg: '48px auto 0' }} maxWidth="1248px">
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    sx={{
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 2, sm: 0 }
                    }}
                >
                    {/* <Box>
                        <Typography variant='h2' fontFamily={'Source Sans Bold'} fontSize={'2.5rem'}>Featured Products</Typography>
                        <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={'1.25rem'}>View our best sellers over here!</Typography>
                    </Box> */}
                    <Typography variant='h2' fontFamily={'Source Sans Bold'} fontSize={'2rem'}>Featured Products</Typography>
                    <Link
                        href='/products/women'
                        color="inherit"
                        sx={{
                            textDecoration: 'none',
                            fontSize: '1.25rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            alignSelf: {xs: 'initial', sm: 'flex-end'},
                            '&:hover': {
                                opacity: 0.7
                            },
                            '&:hover .arrow-icon': {
                                transform: 'translateX(4px)',
                            }
                        }}
                    >
                        <Box component='span' fontFamily='Source Sans Regular'>View All</Box>
                        <IoIosArrowRoundForward
                            className="arrow-icon"
                            style={{
                                transition: 'transform 0.3s ease',
                                fontSize: '1.5rem',
                                verticalAlign: 'middle'
                            }}
                        />
                    </Link>
                </Box>
                <Box
                    component="div"
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: '24px',
                        marginTop: 4
                    }}
                >
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </Box>
            </Box>

            {/* Testimonies */}
            {isClient && windowWidth > 0 && (
                <Box component={'div'} className='testimonial-cards-container' paddingBottom={'25px'} margin={{ margin: '48px 0 0', sm: '48px 0 0 16px', lg: '48px auto 0' }} maxWidth={'1264px'}>
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