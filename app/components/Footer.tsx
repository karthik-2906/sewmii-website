'use client';

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { socialLinks } from '../../public/data/socialLinks';
import { Tooltip, Zoom } from "@mui/material";

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <Box
            component="footer"
            className="footer"
            marginTop={{ xs: '32px', md: '48px', lg: '64px' }}
            borderTop='2px solid var(--color-secondary)'
            display="flex"
            flexDirection="column"
        >

            {/* Social Icons */}
            <Box
                display="flex"
                padding='32px 16px 16px'
                gap={3}
                justifyContent="center"
            >
                {socialLinks.map((socialLink, index) => (
                    <Tooltip
                        title={socialLink.tooltipTitle}
                        key={index}
                        arrow
                        slots={{
                            transition: Zoom,
                        }}
                        slotProps={{
                            tooltip: {
                                sx: {
                                    backgroundColor: 'var(--color-secondary)',
                                    fontSize: '0.8125rem',
                                    // padding: '8px'
                                },
                            },
                            arrow: {
                                sx: {
                                    color: 'var(--color-secondary)'
                                }
                            }
                        }}
                    >
                        <Link
                            href={socialLink.link}
                            sx={{
                                display: 'inline-block',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                },
                            }}
                        >
                            <Image
                                src={socialLink.imgSrc}
                                alt={socialLink.imgAlt}
                                height={32}
                                width={32}
                                style={{ display: 'block' }}
                            />
                        </Link>
                    </Tooltip>
                ))}
            </Box>

            {/* Navigation Links & Copyright */}
            <Box
                display="flex"
                padding="8px 16px"
                gap={1}
                flexDirection="column"
                justifyContent="center"
            >
                <Box display="flex" justifyContent="center">
                    {[
                        { label: "Home", href: "/" },
                        { label: "Contact", href: "mailto:sewmiiofficial@gmail.com" },
                        { label: "Services", href: "/services" }
                    ].map((link, index, array) => (
                        <Box key={link.label} display="flex" alignItems="center">
                            <Link
                                href={link.href}
                                underline="none"
                                sx={{
                                    color: 'gray',
                                    transition: 'color 0.3s ease',
                                    '&:hover': {
                                        color: 'var(--color-primary)',
                                    },
                                }}
                            >
                                {link.label}
                            </Link>
                            {index < array.length - 1 && (
                                <Typography
                                    variant="subtitle2"
                                    lineHeight="unset"
                                    sx={{
                                        fontFamily: "Source Sans Regular",
                                        color: 'gray',
                                        mx: 1.5,
                                    }}
                                >
                                    |
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Box>

                <Typography
                    variant="subtitle1"
                    lineHeight="unset"
                    textAlign="center"
                    sx={{ fontFamily: "Source Sans Regular", color: 'gray' }}
                >
                    © sewmii 2021 - {year}
                </Typography>
            </Box>

            {/* Logo */}
            <Box display="flex" justifyContent="center"
                padding='16px 16px 32px'
            >
                <Link href="/">
                    <Image
                        src="/logos/sewmii-logo-square.png"
                        alt="sewmii logo"
                        height={96}
                        width={96}
                        style={{ display: 'block', height: '96px', width: 'auto' }}
                    />
                </Link>
            </Box>

            {/* Website Credit */}
            <Typography variant="subtitle2" textAlign="center" mb={2} fontFamily={'Source Sans Regular'} color={'gray'}>
                Website created by{' '}
                <Link href="https://www.karthiksivakumar.dev" target="_blank" color="inherit">Karthik Sivakumar</Link>
            </Typography>
        </Box>
    );
}
