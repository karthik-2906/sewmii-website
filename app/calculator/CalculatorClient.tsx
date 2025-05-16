'use client'

import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Calculator from "../components/Calculator";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { useMediaQuery, useTheme } from "@mui/material";

export default function CalculatorPage() {

    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            component="div"
            className="main-container"
            padding={{ xs: '70px 0 0', md: '94px 0 0' }}
        >

            {/* Calculator */}
            <Box
                className='calculator-container'
                margin={{ xs: '40px 0 0', md: '48px 0 0', lg: '48px auto 0' }}
                maxWidth="1248px"
            >
                <TabContext value={value}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        sx={{
                            width: '100%',
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                                display: { display: "flex", sm: "none" },
                            },
                            '& .MuiTabs-flexContainer': {
                                gap: { gap: '8px', md: '16px' },
                                justifyContent: { justifyContent: 'start', md: 'center' }
                            }
                        }}
                    >
                        <Tab label="Torso" value="1" sx={{ fontFamily: 'Source Sans Bold', fontSize: '1rem', width: 'fit-content' }} />
                        <Tab label="Sleeve" value="2" sx={{ fontFamily: 'Source Sans Bold', fontSize: '1rem', width: 'fit-content' }} />
                        <Tab label="Skirt" value="3" sx={{ fontFamily: 'Source Sans Bold', fontSize: '1rem', width: 'fit-content' }} />
                        <Tab label="Pant" value="4" sx={{ fontFamily: 'Source Sans Bold', fontSize: '1rem', width: 'fit-content' }} />
                    </Tabs>
                    <TabPanel value="1" keepMounted={true} sx={{ padding: 0, width: { width: '100%', md: '600px' }, margin: { margin: '0', md: '0 auto' } }}><Calculator title="Torso Calculator" height={isMobile ? "1890.2px" : "1843.42px"} variant="torso" /></TabPanel>
                    <TabPanel value="2" keepMounted={true} sx={{ padding: 0, width: { width: '100%', md: '600px' }, margin: { margin: '0', md: '0 auto' } }}><Calculator title="Sleeve Calculator" height={isMobile ? "716.383px" : "669.783px"} variant="sleeve" /></TabPanel>
                    <TabPanel value="3" keepMounted={true} sx={{ padding: 0, width: { width: '100%', md: '600px' }, margin: { margin: '0', md: '0 auto' } }}><Calculator title="Skirt Calculator" height={isMobile ? "436.883px" : "390.283px"} variant="skirt" /></TabPanel>
                    <TabPanel value="4" keepMounted={true} sx={{ padding: 0, width: { width: '100%', md: '600px' }, margin: { margin: '0', md: '0 auto' } }}><Calculator title="Pant Calculator" height={isMobile ? "809.55px" : "762.95px"} variant="pant" /></TabPanel>
                </TabContext>
            </Box>
        </Box>
    );
}
