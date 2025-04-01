'use client'

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import Image from 'next/image';
import { useEffect, useState } from "react";

const socialLinks = [
    { imgSrc: '/icons/shopee.svg', imgAlt: 'shopee', link: 'https://shopee.ph/sewmii' },
    { imgSrc: '/icons/tiktok.svg', imgAlt: 'tiktok', link: 'https://www.tiktok.com/@sewmii.studio' },
    { imgSrc: '/icons/instagram.svg', imgAlt: 'instagram', link: 'https://www.instagram.com/sewmii.studio/' },
    { imgSrc: '/icons/youtube.svg', imgAlt: 'youtube', link: 'https://www.youtube.com/@sewmii' },
    { imgSrc: '/icons/mail.svg', imgAlt: 'tiktok', link: 'mailto:sewmiiofficial@gmail.com' },
];

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <Box component={'footer'} marginTop={'32px'} borderTop={'1px solid #DEDEDE'} display={'flex'} flexDirection={'column'}>
            <Box component={'div'} display={'flex'} padding={'32px 16px 16px'} gap={3} justifyContent={'center'}>
                {socialLinks.map((socialLink, index) => (
                    <Link key={index} href={socialLink.link}>
                        <Image src={socialLink.imgSrc} alt={socialLink.imgAlt} height={32} width={32} style={{ display: 'block' }} />
                    </Link>
                ))}
            </Box>
            <Box component={'div'} display={'flex'} padding={'8px 16px'} gap={1} flexDirection={'column'} justifyContent={'center'}>
                <Box component={'div'} display={'flex'} gap={1} justifyContent={'center'}>
                    <Link href='/' underline={'none'} sx={{ color: 'gray' }}>Home</Link>
                    <Typography variant="subtitle2" lineHeight={'unset'} sx={{ fontFamily: "Source Sans Regular", color: 'gray' }}>|</Typography>
                    <Link href='/' underline={'none'} sx={{ color: 'gray' }}>Contact</Link>
                    <Typography variant="subtitle2" lineHeight={'unset'} sx={{ fontFamily: "Source Sans Regular", color: 'gray' }}>|</Typography>
                    <Link href='/' underline={'none'} sx={{ color: 'gray' }}>Browse</Link>
                </Box>
                <Typography variant="subtitle1" lineHeight={'unset'} textAlign={'center'} sx={{ fontFamily: "Source Sans Regular", color: 'gray' }}>© sewmii 2021 - {year}</Typography>
            </Box>
            <Box component={'div'} display={'flex'} justifyContent={'center'} padding={'16px 16px 32px'}>
                <Link href='/'>
                    <Image
                        src="/logos/sewmii-logo-square.png"
                        alt='temp'
                        height={96}
                        width={96}
                        style={{ display: 'block', height: '96px', width: 'auto' }}
                    />
                </Link>
            </Box>
        </Box>

    );
}
