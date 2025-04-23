'use client';

import { Fab, Zoom, ButtonBase, ButtonBaseProps, Box } from "@mui/material";
import { useState } from "react";
import { etsyIcon, shopIcon, shopeeIcon } from "@/public/data/images";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";

type ShopLinkProps = ButtonBaseProps & {
    href: string;
    target?: string;
    rel?: string;
};

const ShopLink = ({ href, target, rel, children, ...props }: ShopLinkProps) => (
    <ButtonBase
        component={Link}
        href={href}
        {...(target ? { target } : {})}
        {...(rel ? { rel } : {})}
        sx={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--background)',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            overflow: 'hidden',
        }}
        {...props}
    >
        {children}
    </ButtonBase>
);

export default function FloatingMenu() {
    const [expanded, setExpanded] = useState(false);
    const toggleMenu = () => setExpanded(!expanded);

    return (
        <>
            {expanded && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000,
                        display: { xs: 'block', md: 'none' },
                    }}
                    onClick={toggleMenu}
                />
            )}

            <Box
                className='mobile-floating-menu'
                sx={{
                    position: "fixed",
                    bottom: 24,
                    right: 24,
                    display: { xs: 'block', md: 'none' },
                    zIndex: expanded ? 1001 : 1000,
                }}
            >
                <Zoom in={expanded}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        marginBottom: 2
                    }}>
                        <ShopLink
                            href="https://www.etsy.com/shop/sewmii"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {etsyIcon}
                        </ShopLink>
                        <ShopLink
                            href="https://shopee.ph/sewmii"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {shopeeIcon}
                        </ShopLink>
                    </Box>
                </Zoom>

                <Fab
                    sx={{
                        backgroundColor: 'var(--background)',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        '&:hover': { backgroundColor: 'var(--background)' }
                    }}
                    onClick={toggleMenu}
                >
                    {expanded ? <IoMdClose size={24} /> : shopIcon}
                </Fab>
            </Box>
        </>
    );
}