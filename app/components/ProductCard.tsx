import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselImage {
    src: string;
    alt: string;
}

interface ProductCardProps {
    title: string;
    desc: string;
    link: string;
    carouselImages: CarouselImage[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, desc, link, carouselImages = [] }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Card sx={{ width: { width: '100%', sm: 'calc(50% - 8px)' }, borderRadius: 0, boxShadow: '0 4px 40px rgba(34,59,149,.08)' }}>
            {carouselImages.length > 0 ? <Box component={'div'} className="slider-container" marginBottom={3}>
                <Slider {...settings}>
                    {carouselImages.map((images, index) => (
                        <Image key={index} src={images.src} alt={images.alt} height={400} width={400} style={{ width: '100%', height: 'auto' }} />
                    ))}
                </Slider>
            </Box> : ''}
            <CardContent sx={{ padding: '16px 24px' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Source Sans Bold' }}>
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'var(--foreground)', fontFamily: 'Source Sans Regular' }}>
                    {desc}
                </Typography>
            </CardContent>
            <CardActions sx={{ padding: '16px 24px 24px', gap: 1 }}>
                <Box
                    component="div"
                    sx={{
                        position: 'relative',
                        display: 'inline-block',
                    }}
                >
                    <Box
                        component="div"
                        sx={{
                            position: 'absolute',
                            top: '4px',
                            left: '-4px',
                            right: '4px',
                            bottom: '-4px',
                            backgroundColor: 'var(--calculator-3d-background)',
                            zIndex: 1
                        }}
                    />
                    <Link
                        target='_blank'
                        rel="noopener noreferrer"
                        href={link}
                        underline="none"
                        display="flex"
                        alignItems="center"
                        gap="4px"
                        padding="8px 16px"
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            backgroundColor: "var(--background)",
                            border: '3px solid var(--calculator-3d-background)',
                            transform: 'translate(0, 0)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translate(-4px, 4px)',
                            }
                        }}
                    >
                        <Typography variant="h6" color="var(--foreground)" fontSize="16px" fontFamily={'Source Sans Regular'}>
                            Buy Now
                        </Typography>
                    </Link>
                </Box>
                <Link href="#" underline="none" sx={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', transition: 'opacity 0.3s ease', '&:hover': { opacity: 0.7 }, '&:hover svg': { transform: 'translateX(6px)' } }}>
                    <Typography variant="subtitle1" component="p" fontFamily={'Source Sans Regular'} sx={{ marginRight: '6px' }}>Contact us
                    </Typography>
                    <Box component="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" sx={{ width: '1rem', height: '1rem', transition: 'transform 0.3s ease' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </Box>
                </Link>
            </CardActions>
        </Card>
    )
};

export default ProductCard;