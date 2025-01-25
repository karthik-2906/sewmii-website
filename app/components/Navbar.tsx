'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { IoMdMenu, IoMdClose, IoIosAdd, IoIosRemove } from "react-icons/io";

const productCategories = [
    {
        name: "Men",
        link: "/products/men",
        products: [
            { id: 1, name: "Basic Blocks", link: "/products/men", query: "basic-blocks" },
            { id: 2, name: "Shirts", link: "/products/men", query: "shirts" },
            { id: 3, name: "Pants", link: "/products/men", query: "pants" },
        ]
    },
    {
        name: "Women",
        link: "#",
        products: [
            { id: 1, name: "Basic Blocks", link: "#", query: "" },
            { id: 2, name: "Shirts", link: "#", query: "" },
            { id: 3, name: "Pants", link: "#", query: "" },
            { id: 4, name: "Corsets", link: "#", query: "" },
            { id: 5, name: "Skirts", link: "#", query: "" },
            { id: 6, name: "Dresses", link: "#", query: "" },
        ]
    }
];

const socialLinks = [
    { imgSrc: '/icons/shopee.svg', imgAlt: 'shopee', link: 'https://shopee.ph/sewmii' },
    { imgSrc: '/icons/instagram.svg', imgAlt: 'instagram', link: '#' },
    { imgSrc: '/icons/youtube.svg', imgAlt: 'youtube', link: '#' },
    { imgSrc: '/icons/tiktok.svg', imgAlt: 'tiktok', link: 'https://www.tiktok.com/@sewmii.studio' },
];

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const [openCategories, setOpenCategories] = useState<{
        [key: string]: boolean;
    }>({
        Products: false,
        Men: false,
        Women: false,
    });

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
        if (open == true) {
            document.body.classList.add('disable-body-scroll');
        } else {
            document.body.classList.remove('disable-body-scroll');
        }
    };

    const toggleCategory = (category: string) => {
        setOpenCategories(prev => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const renderSubMenu = (categoryName: string, products: Array<{ id: number, name: string, link: string, query: string }>) => (
        <Collapse in={openCategories[categoryName]} timeout="auto" unmountOnExit>
            <List component="div" sx={{ py: 0 }}>
                {products.map((product) => (
                    <ListItemButton key={product.id} sx={{ pl: 6 }}>
                        <Link href={`${product.link}?tab=${product.query}`} underline='none' color='inherit' width='100%'>
                            <ListItemText disableTypography primary={product.name} />
                        </Link>
                    </ListItemButton>
                ))}
            </List>
        </Collapse>
    );


    const handleScroll = () => {
        const scrollY = window.scrollY;
        const threshold = 56;

        if (scrollY > threshold && scrollY > lastScrollY) {
            setIsVisible(false);
        } else if (scrollY < lastScrollY) {
            setIsVisible(true);
        }

        setLastScrollY(scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const list = () => (
        <Box sx={{ width: '75vw' }} role="presentation" marginBottom={7}>
            <Box component={'div'} display={'flex'} justifyContent={'end'} p={2}>
                <IoMdClose onClick={toggleDrawer(false)} style={{ height: '24px', width: '24px' }} />
            </Box>
            <List
                sx={{ width: '100%', py: 0, fontSize: '24px' }}
                component="nav">
                <ListItemButton>
                    <Link href="/" underline='none' color='inherit' width='100%'>
                        <ListItemText disableTypography primary="Home" />
                    </Link>
                </ListItemButton>
                <ListItemButton>
                    <Link href="#" underline='none' color='inherit'>
                        <ListItemText disableTypography primary="About Us" />
                    </Link>
                </ListItemButton>

                {/*Products Menu */}
                <ListItemButton onClick={() => toggleCategory('Products')}>
                    <ListItemText disableTypography primary="Products" />
                    {openCategories.Products ? <IoIosRemove style={{ height: '32px', width: '32px' }} /> : <IoIosAdd style={{ height: '32px', width: '32px' }} />}
                </ListItemButton>

                {/*Products Sub-Menu*/}
                <Collapse in={openCategories.Products} timeout="auto" unmountOnExit>
                    {productCategories.map(({ name, products, link }) => (
                        <div key={name}>
                            <ListItemButton onClick={() => toggleCategory(name)} sx={{ pl: 4, display: 'flex', justifyContent: 'space-between' }}>
                                <Link href={link} underline='none' color='inherit' onClick={(event) => event.stopPropagation()}>
                                    <ListItemText disableTypography primary={name} />
                                </Link>
                                {openCategories[name] ? <IoIosRemove style={{ height: '32px', width: '32px' }} /> : <IoIosAdd style={{ height: '32px', width: '32px' }} />}
                            </ListItemButton>
                            {renderSubMenu(name, products)}
                        </div>
                    ))}
                </Collapse>

                <ListItemButton>
                    <Link href="/calculator" underline='none' color='inherit' width='100%'>
                        <ListItemText disableTypography primary="Calculator" />
                    </Link>
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <Box component={'header'} display={'flex'} justifyContent={'space-between'} p={2} alignItems={'center'} sx={{
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 10,
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid #DEDEDE',
            transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.3s ease-in-out',
        }}>
            <IoMdMenu onClick={toggleDrawer(true)} style={{ height: '24px', width: '24px' }} />
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} PaperProps={{
                sx: {
                    backgroundColor: 'var(--background)',
                },
            }}>
                {list()}
                <Box component={'div'} position={'fixed'} bottom={'0'} width={'75vw'} sx={{ backgroundColor: 'var(--background)' }}>
                    <Divider />
                    <Box component={'div'} display={'flex'} padding={2} gap={2}>
                        {socialLinks.map((socialLink, index) => (
                            <Link key={index} href={socialLink.link}>
                                <Image src={socialLink.imgSrc} alt={socialLink.imgAlt} height={24} width={24} style={{ display: 'block' }} />
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Drawer >
            <Link href='/'>
                <Image src="/logos/sewmii-logo-text.png" alt='temp' height={24} width={631} style={{ height: '24px', width: 'auto' }}></Image>
            </Link>
        </Box >
    );
}
