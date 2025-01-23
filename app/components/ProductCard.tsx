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
        <Card sx={{ width: '100%', borderRadius: 0, boxShadow: '0 4px 40px rgba(34,59,149,.08)' }}>
            {carouselImages.length>0? <Box component={'div'} className="slider-container" marginBottom={3}>
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
                <Typography variant="body2" sx={{ color: 'var(--foreground)', fontFamily: 'Source Sans Regular' }}>
                    {desc}
                </Typography>
            </CardContent>
            <CardActions sx={{ padding: '16px 24px 24px', gap: 1 }}>
                <Link href="#" color="inherit" underline="none" sx={{ padding: '8px 16px', border: '2px dashed var(--foreground)', position: 'relative', display: 'inline-flex', '&:hover .hover-bg': { transform: 'scaleX(1)' }, '&:hover .hover-text': { color: 'var(--background)' } }}>
                    <Typography variant="subtitle2" fontFamily={'Source Sans Regular'} component="p" className="hover-text" sx={{ fontSize: '1rem', zIndex: 1, color: 'var(--foreground)', transition: 'color 0.3s ease' }}>Buy Now</Typography>
                    <Box component="span" className="hover-bg" sx={{ position: 'absolute', inset: 0, backgroundColor: 'var(--foreground)', transform: 'scaleX(0)', transition: 'transform 0.3s ease', transformOrigin: 'left', zIndex: 0 }} />
                </Link>
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