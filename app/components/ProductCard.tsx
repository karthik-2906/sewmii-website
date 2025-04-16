import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Box from '@mui/material/Box';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { etsyIcon, shopeeIcon } from '@/public/data/images';
import Button3D from './Button3D';

interface CarouselImage {
    src: string;
    alt: string;
}

interface ProductCardProps {
    title: string;
    desc: string;
    shopeeLink: string;
    etsyLink: string;
    carouselImages: CarouselImage[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, desc, shopeeLink, etsyLink, carouselImages = [] }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Card sx={{ width: '100%', borderRadius: 0, boxShadow: '0 4px 40px rgba(34,59,149,.08)' }}>
            {carouselImages.length > 0 ? <Box component={'div'} className="slider-container" marginBottom={3}>
                <Slider {...settings}>
                    {carouselImages.map((images, index) => (
                        <Box key={index} component="div" sx={{ position: 'relative', width: '100%', height: '375px' }}>
                            <Image
                                src={images.src}
                                alt={images.alt}
                                fill
                                style={{ objectFit: 'cover' }}
                                loading='eager'
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </Box>
                    ))}
                </Slider>
            </Box> : ''}
            <CardContent sx={{ padding: '16px 24px' }}>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Source Sans Bold' }}>
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ color: 'var(--color-primary)', fontFamily: 'Source Sans Regular' }}>
                    {desc}
                </Typography>
            </CardContent>
            <CardActions sx={{
                padding: '16px 24px 24px',
                flexWrap: 'wrap',
                '& > :not(style) ~ :not(style)': {
                    marginLeft: 0
                },
                gap: 2
            }}>
                {etsyLink && (
                    <Button3D href={etsyLink} image={etsyIcon}>
                        Buy Now
                    </Button3D>
                )}
                {shopeeLink && (
                    <Button3D href={shopeeLink} image={shopeeIcon}>
                        Buy Now
                    </Button3D>
                )}
            </CardActions>
        </Card>
    )
};

export default ProductCard;