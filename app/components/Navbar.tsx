'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
    Box,
    Drawer,
    Divider,
    Link,
    List,
    ListItemButton,
    ListItemText,
    Collapse,
    Typography,
    Button,
    PaperProps,
    ListItem
} from '@mui/material';
import {
    IoMdMenu,
    IoMdClose,
    IoIosAdd,
    IoIosRemove,
    IoIosArrowDown
} from "react-icons/io";

// Types
interface Product {
    id: number;
    name: string;
    link: string;
    query: string;
}

interface ProductCategory {
    name: string;
    link: string;
    products: Product[];
}

interface SocialLink {
    imgSrc: string;
    imgAlt: string;
    link: string;
}

// Constants
const PRODUCT_CATEGORIES: ProductCategory[] = [
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

const SOCIAL_LINKS: SocialLink[] = [
    { imgSrc: '/icons/shopee.svg', imgAlt: 'shopee', link: 'https://shopee.ph/sewmii' },
    { imgSrc: '/icons/tiktok.svg', imgAlt: 'tiktok', link: 'https://www.tiktok.com/@sewmii.studio' },
    { imgSrc: '/icons/instagram.svg', imgAlt: 'instagram', link: 'https://www.instagram.com/sewmii.studio/' },
    { imgSrc: '/icons/youtube.svg', imgAlt: 'youtube', link: 'https://www.youtube.com/@sewmii' },
    { imgSrc: '/icons/mail.svg', imgAlt: 'tiktok', link: 'mailto:sewmiiofficial@gmail.com' },
];

const SHOP_LOGO = (
    <svg height='24px' width='24px' viewBox="0 0 24 24" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25013 6.01489C8.25003 6.00994 8.24998 6.00498 8.24998 6V5C8.24998 2.92893 9.92892 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V6C15.75 6.00498 15.7499 6.00994 15.7498 6.01489C17.0371 6.05353 17.8248 6.1924 18.4261 6.69147C19.2593 7.38295 19.4787 8.55339 19.9177 10.8943L20.6677 14.8943C21.2849 18.186 21.5934 19.8318 20.6937 20.9159C19.794 22 18.1195 22 14.7704 22H9.22954C5.88048 22 4.20595 22 3.30624 20.9159C2.40652 19.8318 2.71512 18.186 3.33231 14.8943L4.08231 10.8943C4.52122 8.55339 4.74068 7.38295 5.57386 6.69147C6.17521 6.1924 6.96287 6.05353 8.25013 6.01489ZM9.74998 5C9.74998 3.75736 10.7573 2.75 12 2.75C13.2426 2.75 14.25 3.75736 14.25 5V6C14.25 5.99999 14.25 6.00001 14.25 6C14.1747 5.99998 14.0982 6 14.0204 6H9.97954C9.90176 6 9.82525 6 9.74998 6.00002C9.74998 6.00002 9.74998 6.00003 9.74998 6.00002V5Z"
            fill="#404040"
        />
    </svg>
);

const SCROLL_THRESHOLD = 56;

// Sub-components
const SubMenu = ({
    categoryName,
    products,
    openCategories
}: {
    categoryName: string;
    products: Product[];
    openCategories: Record<string, boolean>;
}) => (
    <Collapse in={openCategories[categoryName]} timeout="auto" unmountOnExit>
        <List component="div" sx={{ py: 0 }}>
            {products.map((product) => (
                <ListItemButton key={product.id} sx={{ pl: 6 }}>
                    <Link
                        href={`${product.link}?tab=${product.query}`}
                        underline='none'
                        color='inherit'
                        width='100%'
                    >
                        <ListItemText disableTypography primary={product.name} />
                    </Link>
                </ListItemButton>
            ))}
        </List>
    </Collapse>
);

const DrawerContent = ({
    toggleDrawer,
    toggleCategory,
    openCategories
}: {
    toggleDrawer: (open: boolean) => () => void;
    toggleCategory: (category: string) => void;
    openCategories: Record<string, boolean>;
}) => (
    <Box sx={{ width: '75vw' }} role="presentation" marginBottom={7}>
        <Box display={'flex'} justifyContent={'end'} p={2}>
            <IoMdClose
                onClick={toggleDrawer(false)}
                style={{ height: '24px', width: '24px', cursor: 'pointer' }}
            />
        </Box>
        <List sx={{ width: '100%', py: 0, fontSize: '24px' }} component="nav">
            <ListItemButton sx={{
                "&:hover": { backgroundColor: "transparent" },
                "&:active": { backgroundColor: "transparent" }
            }}>
                <Link href="/" underline='none' color='inherit' width='100%'>
                    <ListItemText disableTypography primary="Home" />
                </Link>
            </ListItemButton>

            {/* Products Menu */}
            <ListItemButton
                sx={{
                    "&:hover": { backgroundColor: "transparent" },
                    "&:active": { backgroundColor: "transparent" }
                }}
                onClick={() => toggleCategory('Products')}
            >
                <ListItemText disableTypography primary="Products" />
                {openCategories.Products ?
                    <IoIosRemove style={{ height: '32px', width: '32px' }} /> :
                    <IoIosAdd style={{ height: '32px', width: '32px' }} />
                }
            </ListItemButton>

            {/* Products Sub-Menu */}
            <Collapse in={openCategories.Products} timeout="auto" unmountOnExit>
                {PRODUCT_CATEGORIES.map(({ name, products, link }) => (
                    <div key={name}>
                        <ListItemButton
                            onClick={() => toggleCategory(name)}
                            sx={{
                                pl: 4,
                                display: 'flex',
                                justifyContent: 'space-between',
                                backgroundColor: '#F2F2F2',
                                "&:hover": { backgroundColor: "#F2F2F2" },
                                "&:active": { backgroundColor: "#F2F2F2" }
                            }}
                        >
                            <Link
                                href={link}
                                underline='none'
                                color='inherit'
                                onClick={(event) => event.stopPropagation()}
                            >
                                <ListItemText disableTypography primary={name} />
                            </Link>
                            {openCategories[name] ?
                                <IoIosRemove style={{ height: '32px', width: '32px' }} /> :
                                <IoIosAdd style={{ height: '32px', width: '32px' }} />
                            }
                        </ListItemButton>
                        <SubMenu
                            categoryName={name}
                            products={products}
                            openCategories={openCategories}
                        />
                    </div>
                ))}
            </Collapse>

            <ListItemButton sx={{
                "&:hover": { backgroundColor: "transparent" },
                "&:active": { backgroundColor: "transparent" }
            }}>
                <Link href="/calculator" underline='none' color='inherit' width='100%'>
                    <ListItemText disableTypography primary="Calculator" />
                </Link>
            </ListItemButton>

            <ListItemButton sx={{
                "&:hover": { backgroundColor: "transparent" },
                "&:active": { backgroundColor: "transparent" }
            }}>
                <Link href="/" underline='none' color='inherit' width='100%'>
                    <ListItemText disableTypography primary="Services" />
                </Link>
            </ListItemButton>
        </List>

        {/* Social Links */}
        <Box position={'fixed'} bottom={'0'} width={'75vw'} sx={{ backgroundColor: 'var(--background)' }}>
            <Divider />
            <Box display={'flex'} padding={2} gap={2}>
                {SOCIAL_LINKS.map((socialLink, index) => (
                    <Link key={index} href={socialLink.link} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={socialLink.imgSrc}
                            alt={socialLink.imgAlt}
                            height={24}
                            width={24}
                            style={{ display: 'block' }}
                        />
                    </Link>
                ))}
            </Box>
        </Box>
    </Box>
);

const ProductsDropdown = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside or when the button is clicked again
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click is outside the dropdown AND not on the Products button
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest('[aria-controls="products-menu"]')) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <Box
            ref={dropdownRef}
            sx={{
                position: 'absolute',
                top: '102%',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'white',
                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                borderLeft: '2px dashed #DEDEDE',
                borderRight: '2px dashed #DEDEDE',
                borderBottom: '2px dashed #DEDEDE',
                zIndex: 1000,
                maxWidth: '1440px',
                width: '100%',
                padding: '16px 0',

            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                    maxWidth: '1248px',
                    margin: {margin: '0 16px', lg: '0 auto'}
                }}
            >
                {PRODUCT_CATEGORIES.map((category) => (
                    <Box key={category.name}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {category.name}
                        </Typography>
                        <List>
                            {category.products.map((product) => (
                                <ListItem key={product.id} sx={{ p: 0 }}>
                                    <Link
                                        href={`${product.link}?tab=${product.query}`}
                                        underline="none"
                                        color="inherit"
                                        sx={{
                                            display: 'block',
                                            '&:hover': { color: 'primary.main' },
                                        }}
                                    >
                                        {product.name}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
};

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
        Products: false,
        Men: false,
        Women: false,
    });

    const isMobile = useMediaQuery('(max-width: 900px)');

    const toggleDesktopMenu = useCallback(() => {
        setIsProductsOpen(prev => !prev);
    }, []);

    const closeProductsMenu = useCallback(() => {
        setIsProductsOpen(false);
    }, []);

    const toggleDrawer = useCallback((open: boolean) => () => {
        setIsDrawerOpen(open);
        document.body.classList.toggle('disable-body-scroll', open);
    }, []);

    const toggleCategory = useCallback((category: string) => {
        setOpenCategories(prev => ({
            ...prev,
            [category]: !prev[category],
        }));
    }, []);

    const handleScroll = useCallback(() => {
        if (!isMobile) {
            setIsVisible(true);
            return;
        }

        const scrollY = window.scrollY;

        if (scrollY > SCROLL_THRESHOLD && scrollY > lastScrollY) {
            setIsVisible(false);
        } else if (scrollY < lastScrollY) {
            setIsVisible(true);
        }

        setLastScrollY(scrollY);
    }, [lastScrollY, isMobile]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const drawerPaperProps: Partial<PaperProps> = {
        sx: {
            backgroundColor: 'var(--background)',
        },
    };

    return (
        <Box component={'header'} sx={{
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 10,
            backgroundColor: 'var(--background)',
            borderBottom: '2px dashed #DEDEDE',
            transform: isMobile ? (isVisible ? 'translateY(0)' : 'translateY(-100%)') : 'translateY(0)',
            transition: 'transform 0.3s ease-in-out',
        }}>

            {/* Header desktop */}
            <Box
                display={{ xs: 'none', md: 'flex' }}
                justifyContent={'space-between'}
                py={3}
                px={{ xs: 2, lg: 0 }}
                alignItems={'center'}
                maxWidth={'1248px'}
                margin={'0 auto'}
            >
                <Link href='/' aria-label="Home">
                    <Image
                        src="/logos/sewmii-logo-text.png"
                        alt='Sewmii Logo'
                        height={24}
                        width={631}
                        style={{ height: '24px', width: 'auto' }}
                        priority
                    />
                </Link>

                <Box display={'flex'} gap={0} alignItems={'center'}>
                    <NavLink href="/" text="Home" />

                    <Button
                        onClick={toggleDesktopMenu}
                        sx={{
                            display: "flex",
                            gap: "4px",
                            alignItems: "center",
                            p: "8px 16px",
                            borderRadius: 1,
                            transition: "background-color 0.3s ease",
                            "&:hover": { backgroundColor: "#f0f0f0" }
                        }}
                        aria-expanded={isProductsOpen}
                        aria-controls="products-menu"
                    >
                        <Typography
                            variant="h6"
                            fontSize="16px"
                            fontFamily="Source Sans Regular"
                            textTransform="none"
                            color="black"
                        >
                            Products
                        </Typography>
                        <IoIosArrowDown
                            style={{
                                transform: isProductsOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.3s ease",
                                color: "black"
                            }}
                        />
                    </Button>

                    <ProductsDropdown isOpen={isProductsOpen} onClose={closeProductsMenu} />

                    <NavLink href="/calculator" text="Calculator" />
                    <NavLink href="/" text="Services" />
                </Box>

                <ShopLink />
            </Box>

            {/* Header mobile */}
            <Box
                display={{ xs: 'flex', md: 'none' }}
                justifyContent={'space-between'}
                p={2}
                alignItems={'center'}
            >
                <IoMdMenu
                    onClick={toggleDrawer(true)}
                    style={{ height: '24px', width: '24px', cursor: 'pointer' }}
                    aria-label="Open menu"
                />

                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={toggleDrawer(false)}
                    PaperProps={drawerPaperProps}
                >
                    <DrawerContent
                        toggleDrawer={toggleDrawer}
                        toggleCategory={toggleCategory}
                        openCategories={openCategories}
                    />
                </Drawer>

                <Link href='/' aria-label="Home">
                    <Image
                        src="/logos/sewmii-logo-text.png"
                        alt='Sewmii Logo'
                        height={24}
                        width={631}
                        style={{ height: '24px', width: 'auto' }}
                        priority
                    />
                </Link>
            </Box>
        </Box>
    );
}

// Small reusable components
const NavLink = ({ href, text }: { href: string; text: string }) => (
    <Link
        href={href}
        underline="none"
        color="black"
        fontSize="16px"
        p="8px 16px"
        borderRadius={1}
        sx={{
            transition: 'background-color 0.3s ease',
            '&:hover': { backgroundColor: '#f0f0f0' }
        }}
    >
        {text}
    </Link>
);

const ShopLink = () => (
    <Link
        target='_blank'
        rel="noopener noreferrer"
        href="https://shopee.ph/sewmii"
        underline="none"
        display="flex"
        alignItems="center"
        gap="4px"
        padding="8px 32px"
        borderRadius={1}
        sx={{
            backgroundColor: "#e8e8e8",
            transition: "all 0.3s ease",
            "&:hover": { "& .button-content": { transform: "scale(0.95)", opacity: 0.8 } }
        }}
    >
        <span className="button-content" style={{ display: "flex", alignItems: "center", gap: "4px", transition: "transform 0.3s ease" }}>
            {SHOP_LOGO}
            <Typography variant="h6" color="black" fontSize="12px" fontFamily={'Source Sans Regular'}>
                Buy Now
            </Typography>
        </span>
    </Link>
);