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
import Typography from '@mui/material/Typography';
import { IoIosArrowDown } from "react-icons/io";

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
    { imgSrc: '/icons/tiktok.svg', imgAlt: 'tiktok', link: 'https://www.tiktok.com/@sewmii.studio' },
    { imgSrc: '/icons/instagram.svg', imgAlt: 'instagram', link: 'https://www.instagram.com/sewmii.studio/' },
    { imgSrc: '/icons/youtube.svg', imgAlt: 'youtube', link: 'https://www.youtube.com/@sewmii' },
    { imgSrc: '/icons/mail.svg', imgAlt: 'tiktok', link: 'mailto:sewmiiofficial@gmail.com' },
];

const shopLogo = <svg height='24px' width='24px' viewBox="0 0 24 24" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M8.25013 6.01489C8.25003 6.00994 8.24998 6.00498 8.24998 6V5C8.24998 2.92893 9.92892 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V6C15.75 6.00498 15.7499 6.00994 15.7498 6.01489C17.0371 6.05353 17.8248 6.1924 18.4261 6.69147C19.2593 7.38295 19.4787 8.55339 19.9177 10.8943L20.6677 14.8943C21.2849 18.186 21.5934 19.8318 20.6937 20.9159C19.794 22 18.1195 22 14.7704 22H9.22954C5.88048 22 4.20595 22 3.30624 20.9159C2.40652 19.8318 2.71512 18.186 3.33231 14.8943L4.08231 10.8943C4.52122 8.55339 4.74068 7.38295 5.57386 6.69147C6.17521 6.1924 6.96287 6.05353 8.25013 6.01489ZM9.74998 5C9.74998 3.75736 10.7573 2.75 12 2.75C13.2426 2.75 14.25 3.75736 14.25 5V6C14.25 5.99999 14.25 6.00001 14.25 6C14.1747 5.99998 14.0982 6 14.0204 6H9.97954C9.90176 6 9.82525 6 9.74998 6.00002C9.74998 6.00002 9.74998 6.00003 9.74998 6.00002V5Z" fill="#404040"></path> </g></svg>

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const toggleDesktopMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

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
                <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" }, "&:active": { backgroundColor: "transparent" } }}>
                    <Link href="/" underline='none' color='inherit' width='100%'>
                        <ListItemText disableTypography primary="Home" />
                    </Link>
                </ListItemButton>

                {/*Products Menu */}
                <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" }, "&:active": { backgroundColor: "transparent" } }} onClick={() => toggleCategory('Products')}>
                    <ListItemText disableTypography primary="Products" />
                    {openCategories.Products ? <IoIosRemove style={{ height: '32px', width: '32px' }} /> : <IoIosAdd style={{ height: '32px', width: '32px' }} />}
                </ListItemButton>

                {/*Products Sub-Menu*/}
                <Collapse in={openCategories.Products} timeout="auto" unmountOnExit>
                    {productCategories.map(({ name, products, link }) => (
                        <div key={name}>
                            <ListItemButton onClick={() => toggleCategory(name)} sx={{ pl: 4, display: 'flex', justifyContent: 'space-between', backgroundColor: '#F2F2F2', "&:hover": { backgroundColor: "#F2F2F2" }, "&:active": { backgroundColor: "#F2F2F2" } }}>
                                <Link href={link} underline='none' color='inherit' onClick={(event) => event.stopPropagation()}>
                                    <ListItemText disableTypography primary={name} />
                                </Link>
                                {openCategories[name] ? <IoIosRemove style={{ height: '32px', width: '32px' }} /> : <IoIosAdd style={{ height: '32px', width: '32px' }} />}
                            </ListItemButton>
                            {renderSubMenu(name, products)}
                        </div>
                    ))}
                </Collapse>

                <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" }, "&:active": { backgroundColor: "transparent" } }}>
                    <Link href="/calculator" underline='none' color='inherit' width='100%'>
                        <ListItemText disableTypography primary="Calculator" />
                    </Link>
                </ListItemButton>
                <ListItemButton sx={{ "&:hover": { backgroundColor: "transparent" }, "&:active": { backgroundColor: "transparent" } }}>
                    <Link href="/" underline='none' color='inherit' width='100%'>
                        <ListItemText disableTypography primary="Services" />
                    </Link>
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <Box component={'header'} sx={{
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 10,
            backgroundColor: 'var(--background)',
            borderBottom: '1px solid #DEDEDE',
            transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.3s ease-in-out',
        }}>

            {/* Header desktop */}
            <Box component={'div'} display={{ display: 'none', md: 'flex' }} justifyContent={'space-between'} p='24px 0' alignItems={'center'} maxWidth={'1248px'} margin={{ margin: '0 16px', lg: '0 auto' }}>
                <Link href='/'>
                    <Image src="/logos/sewmii-logo-text.png" alt='temp' height={24} width={631} style={{ height: '24px', width: 'auto' }}></Image>
                </Link>
                <Box component={'div'} display={'flex'} gap={0} alignItems={'center'}>
                    <Link href="/" underline="none" color="black" fontSize="16px" p="8px 16px" borderRadius={1} sx={{ transition: 'background-color 0.3s ease', '&:hover': { backgroundColor: '#f0f0f0' } }}>Home</Link>
                    <Box component={'div'} display={'flex'} gap={'4px'} alignItems={'center'} fontFamily={'Source Sans Regular'} p="8px 16px" borderRadius={1} sx={{ transition: 'background-color 0.3s ease', '&:hover': { backgroundColor: '#f0f0f0', cursor: 'pointer' } }}
                        onClick={toggleDesktopMenu}
                    >
                        <Typography variant='h6' fontFamily={'Source Sans Regular'} fontSize={'16px'}>Products</Typography>
                        <IoIosArrowDown style={{
                            transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease'
                        }} />
                    </Box>
                    <Link href="/calculator" underline="none" color="black" fontSize="16px" p="8px 16px" borderRadius={1} sx={{ transition: 'background-color 0.3s ease', '&:hover': { backgroundColor: '#f0f0f0' } }}>Calculator</Link>
                    <Link href="/" underline="none" color="black" fontSize="16px" p="8px 16px" borderRadius={1} sx={{ transition: 'background-color 0.3s ease', '&:hover': { backgroundColor: '#f0f0f0' } }}>Services</Link>
                </Box>
                <Link target='_blank' href="https://shopee.ph/sewmii" underline="none" display="flex" alignItems="center" gap="4px" padding="8px 32px" borderRadius={1} sx={{ backgroundColor: "#e8e8e8", transition: "all 0.3s ease", "&:hover": { "& .button-content": { transform: "scale(0.95)" } } }}>
                    <span className="button-content" style={{ display: "flex", alignItems: "center", gap: "4px", transition: "transform 0.3s ease" }}>
                        {shopLogo}
                        <Typography variant="h6" color="black" fontSize="12px" fontFamily={'Source Sans Regular'}>
                            Buy Now
                        </Typography>
                    </span>
                </Link>
            </Box>

            {/* Header mobile */}
            <Box component={'div'} display={{ display: 'flex', md: 'none' }} justifyContent={'space-between'} p='16px' alignItems={'center'}>
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
            </Box>
        </Box>
    );
}
