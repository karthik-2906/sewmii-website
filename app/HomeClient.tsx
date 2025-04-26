"use client";

import { useState, useEffect } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./components/TestimonialCard";
import Banner from "./components/Banner";
import { ProductCardInfo } from "@/public/data/productCategories";
import { shopLinks } from "@/public/data/shopLinks";
import { Box, Link, Typography } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import ProductCard from "./components/ProductCard";
import ShopCard from "./components/ShopCard";

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
        <Box
            component="div"
            className="main-container"
            padding={{ xs: '62px 0 0', md: '94px 0 0' }}
        >

            {/* Banner */}
            <Banner image="/images/sewmii-temp-banner-2.jpg" />

            {/* Shop links */}
            <Box
                margin={{ xs: '32px 16px 0', md: '48px 16px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'}>Under Development</Typography>
                <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={'1.25rem'} marginTop={2} marginBottom={2}>The website is under development and certain links will not work</Typography>
                <Box
                    display="grid"
                    gap={2}
                    sx={{
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
                            // sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(5, 1fr)',
                        },
                    }}
                >
                    {shopLinks.map((shop, index) => (
                        <ShopCard
                            key={index}
                            title={shop.title}
                            shopName={shop.shopName}
                            shopDesc={shop.shopDesc}
                            link={shop.link}
                            image={shop.img}
                            imageAlt={shop.imageAlt}
                            location={shop.location}
                            locationImage={shop.locationImg}
                            locationImageAlt={shop.locationImgAlt}
                        />
                    ))}
                </Box>
            </Box>

            {/* Featured Products */}
            <Box
                className='featured-products-container'
                margin={{ xs: '32px 16px 0', md: '48px 16px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
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
                            width: 'fit-content',
                            alignSelf: { xs: 'initial', sm: 'flex-end' },
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
                                fontSize: '2rem',
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