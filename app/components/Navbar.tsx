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
import { shopIcon } from '@/public/data/images';
import { socialLinks } from '@/public/data/socialLinks';
import { productCategories, Product } from '@/public/data/productCategories';
import Button3D from './Button3D';

const SCROLL_THRESHOLD = 56;

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

// Mobile Navigation
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
                {productCategories.map(({ name, products, link }) => (
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
                {socialLinks.map((socialLink, index) => (
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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
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

    return (
        <Box
            ref={dropdownRef}
            sx={{
                display: { xs: 'none', md: 'block' },
                position: 'fixed',
                top: isOpen ? '94px' : '-86%',
                transition: '500ms',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--background)',
                zIndex: 9,
                width: '100%',
                padding: '32px 0',
            }}
        >
            <Box
                sx={{
                    // display: 'grid',
                    // gridTemplateColumns: 'repeat(3, 1fr)',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    gap: '24px',
                    maxWidth: '1248px',
                    margin: { margin: '0 16px', lg: '0 auto' }
                }}
            >
                {productCategories.map((category) => (
                    <Box key={category.name}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            <Link
                                href={category.link}
                                underline='none'
                                color='var(--foreground)'
                            >
                                {category.name}
                            </Link>
                        </Typography>
                        <List>
                            {category.products.map((product) => (
                                <ListItem key={product.id} sx={{ p: '2px 0' }}>
                                    <Link
                                        href={`${product.link}?tab=${product.query}`}
                                        underline="none"
                                        color="#909090"
                                        sx={{
                                            display: 'block',
                                            transition: '0.3s ease-in-out',
                                            '&:hover': { color: 'var(--foreground)', transition: '0.3s ease-in-out' },
                                        }}
                                    >
                                        {product.name}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
                <Image
                    src="/images/sewmii-pattern.jpg"
                    alt='Sewmii Logo'
                    height={400}
                    width={400}
                    loading='eager'
                    style={{ height: 'auto', width: '400px' }}
                />
            </Box>
        </Box>
    );
};

const Overlay = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
    <Box
        sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 8,
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
            transition: 'opacity 500ms ease',
            display: { xs: 'none', md: 'block' },
        }}
        onClick={onClick}
    />
);

// Small reusable components
const NavLink = ({ href, text }: { href: string; text: string }) => (
    <Link
        href={href}
        underline="none"
        color="var(--foreground)"
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
        <>
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
                                color="var(--foreground)"
                            >
                                Products
                            </Typography>
                            <IoIosArrowDown
                                style={{
                                    transform: isProductsOpen ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.3s ease",
                                    color: "var(--foreground)"
                                }}
                            />
                        </Button>

                        <NavLink href="/calculator" text="Calculator" />
                        <NavLink href="/" text="Services" />
                    </Box>

                    <Button3D href='https://shopee.ph/sewmii' fontSize='12px' image={shopIcon}>Shop Now</Button3D>
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
            <Overlay isOpen={isProductsOpen} onClick={closeProductsMenu} />
            <ProductsDropdown isOpen={isProductsOpen} onClose={closeProductsMenu} />
        </>
    );
}