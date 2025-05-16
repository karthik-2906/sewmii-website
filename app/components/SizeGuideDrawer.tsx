'use client'

import React, { useState } from 'react';
import { Drawer, Box, Typography, IconButton, styled, Tab, Tabs, Fab } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import { useMediaQuery, useTheme } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';
import { measuringTapeIcon } from '@/public/data/images';

const SizeGuideButton = styled('button')(({ theme }) => ({
    fontSize: 16,
    position: 'fixed',
    top: '40%',
    right: 0,
    transform: 'rotate(-90deg) translateY(-50%)',
    transformOrigin: 'right center',
    zIndex: 2,
    background: 'var(--component-background)',
    color: 'var(--color-primary)',
    padding: '10px 20px',
    border: '3px solid var(--color-secondary)',
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
        background: 'var(--color-secondary)',
        color: 'var(--component-background)',
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}));

const SizeGuideDrawer = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen: boolean) => () => {
        setOpen(isOpen);
        // document.body.classList.toggle('disable-body-scroll');
    };

    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            {/* Desktop Size Guide Button */}
            <SizeGuideButton className='size-guide-btn-desktop' onClick={toggleDrawer(true)}>
                Size Guide
            </SizeGuideButton>

            {/*  Mobile Size Guide Button */}
            <Box
                className='size-guide-btn-mobile'
                sx={{
                    position: "fixed",
                    bottom: 96,
                    right: 24,
                    display: { xs: 'block', md: 'none' },
                    zIndex: 1000,
                }}
            >

                <Fab
                    sx={{
                        backgroundColor: 'var(--component-background)',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        '&:hover': { backgroundColor: 'var(--component-background)' }
                    }}
                    onClick={toggleDrawer(true)}
                >
                    {measuringTapeIcon}
                </Fab>
            </Box>

            <Drawer
                className='size-guide-btn-drawer'
                anchor={isMobile ? 'top' : 'right'}
                open={open}
                onClose={toggleDrawer(false)}
                transitionDuration={500}
                keepMounted
                PaperProps={{
                    sx: {
                        background: 'var(--page-background)',
                        width: 'auto',
                        maxWidth: '100vw',
                        padding: 2.5,
                        borderTopLeftRadius: isMobile? 0 : 12,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: isMobile? 12 : 0
                    },
                }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h6" fontFamily={'Source Sans Bold'} fontSize={'24px'}>Size Guide</Typography>
                    <IconButton onClick={toggleDrawer(false)} sx={{ padding: 0 }}>
                        <IoMdClose />
                    </IconButton>
                </Box>
                <Box mt={2} sx={{ width: 'fit-content' }}>
                    <TabContext value={value}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            sx={{
                                marginBottom: 2,
                                width: '100%',
                                padding: { padding: 0, md: '0', sm: '0 16px' },
                                '& .MuiTabs-flexContainer': {
                                    gap: { gap: '8px', md: '16px' },
                                }
                            }}
                        >
                            <Tab label="IN" value="1" sx={{ fontFamily: 'Source Sans Bold', fontSize: '1rem', width: 'fit-content' }} />
                            <Tab label="CM" value="2" sx={{ fontFamily: 'Source Sans Bold', fontSize: '1rem', width: 'fit-content' }} />
                        </Tabs>
                        <TabPanel value="1" keepMounted={true} sx={{ padding: 0, margin: { margin: '0', md: '0 auto' } }}>
                            <Image
                                src='/images/sewmii-size-guide-in.jpg'
                                alt='Size guide in inches'
                                width={420}
                                height={420}
                                loading='eager'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    border: '2px solid var(--color-secondary)',
                                    borderRadius: 4
                                }}
                            />
                        </TabPanel>
                        <TabPanel value="2" keepMounted={true} sx={{ padding: 0, margin: { margin: '0', md: '0 auto' } }}>
                            <Image
                                src='/images/sewmii-size-guide-cm.jpg'
                                alt='Size Guide in centimeters'
                                width={420}
                                height={420}
                                loading='eager'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    border: '2px solid var(--color-secondary)',
                                    borderRadius: 4
                                }}
                            />
                        </TabPanel>
                    </TabContext>
                </Box>
            </Drawer>
        </>
    );
};

export default SizeGuideDrawer;