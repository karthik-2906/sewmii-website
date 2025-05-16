'use client';

import { Box, Typography } from "@mui/material";
import Banner from "../components/Banner";
import ShopCard from "../components/ShopCard";
import ContactCard from "../components/ContactCard";
import Button3D from "../components/Button3D";
import { CurrencySelector } from "../components/CurrencySelector";
import { shopLinks } from "@/public/data/shopLinks";
import { contactLinks } from "@/public/data/contactLinks";
import { customPatterns } from "@/public/data/customPatterns";
import Image from "next/image";
import { useState } from "react";

interface CustomPattern {
    image: string;
    title: string;
    prices: {
        USD: string;
        EUR: string;
        PHP: string;
        [key: string]: string;
    };
}

export default function ServicesPage() {
    const [currency, setCurrency] = useState<'USD' | 'EUR' | 'PHP'>('USD');

    return (
        <Box
            component="div"
            className="main-container"
            padding={{ xs: '70px 0 0', md: '94px 0 0' }}
        >
            {/* Banner */}
            <Banner image="/images/banner shadow test img.png" />
            <Banner image="/images/banner shadow test img mobile.png" mobile />

            {/* Services Intro */}
            <Box
                margin={{ xs: '40px 20px 0', md: '48px 20px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'}>Sewmii Pattern Studio</Typography>
                <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={{ xs: 18, md: 20 }} marginTop={2}>
                    At Sewmii Pattern Studio, we offer premium quality printed and digital patterns for sewing enthusiasts, aspiring designers, and garment businesses. Our patterns are designed to facilitate those who wish to embark on sewing as a hobby but lack pattern-making skills, as well as those looking to create bespoke garments at home or for commercial purposes.
                </Typography>
            </Box>

            {/* Shop links */}
            <Box
                margin={{ xs: '40px 20px 0', md: '48px 20px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'} mb={2}>Buy Sewing Patterns</Typography>
                <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={{ xs: 18, md: 20 }} mb={2}>
                    We offer high grade physical and digital patterns in the following websites
                </Typography>
                <Box
                    display="grid"
                    gap={2}
                    sx={{
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
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

            {/* Custom Pattern Description */}
            <Box
                className='custom-pattern-container'
                margin={{ xs: '40px 20px 0', md: '48px 20px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'}>Custom Patterns</Typography>
                <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={{ xs: 18, md: 20 }} marginTop={2} marginBottom={2}>
                    We specialize in creating custom, exclusive patterns tailored to your specifications.
                    These designs are unique to each client and will not be available for purchase in our store,
                    ensuring your exclusive ownership. Each custom pattern includes a printed copy and a master digital file.
                </Typography>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <Button3D href="mailto:sewmiiofficial@gmail.com?subject=Custom Pattern Enquiry" newTab={false}>Enquire Now</Button3D>
                    <CurrencySelector currency={currency} setCurrency={setCurrency} />
                </Box>

                <Box
                    display={'flex'}
                    gap={2}
                    mt={2}
                    flexWrap={'wrap'}
                >
                    {(customPatterns as CustomPattern[]).map((item, index) => (
                        <Box
                            key={index}
                            flex={1}
                            textAlign={'center'}
                            minWidth={{ xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)', lg: 'calc(25% - 16px)' }}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={256}
                                height={256}
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                            <Typography
                                variant="h2"
                                fontFamily={'Source Sans Bold'}
                                fontSize={'1.5rem'}
                            >
                                {item.title}
                            </Typography>
                            <Box
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    backgroundColor: 'var(--color-accent)',
                                    color: 'var(--color-secondary)',
                                    px: 2,
                                    py: 1,
                                    borderRadius: 1,
                                    border: '3px solid var(--color-secondary)',
                                    marginTop: 2
                                }}
                            >
                                <Typography fontFamily={'Source Sans Bold'} fontSize={16}>
                                    {item.prices[currency]}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Contact cards */}
            <Box
                margin={{ xs: '40px 20px 0', md: '48px 20px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
                sx={{ scrollMarginTop: { xs: '20px', md: '120px' } }}
            >
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'} mb={2}>Connect with us</Typography>
                <Box
                    display="grid"
                    gap={2}
                    sx={{
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)',
                        },
                    }}
                >
                    {contactLinks.map((contact, index) => (
                        <ContactCard
                            key={index}
                            title={contact.title}
                            profileName={contact.profileName}
                            desc={contact.desc}
                            link={contact.link}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}