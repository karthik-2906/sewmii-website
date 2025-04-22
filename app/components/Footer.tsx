'use client'

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { socialLinks } from '../../public/data/socialLinks';

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <Box component={'footer'} className='footer' marginTop={'32px'} borderTop={'2px dashed #DEDEDE'} display={'flex'} flexDirection={'column'}>
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
                    <Link href='mailto:sewmiiofficial@gmail.com' underline={'none'} sx={{ color: 'gray' }}>Contact</Link>
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
