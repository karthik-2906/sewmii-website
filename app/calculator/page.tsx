'use client'

import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Calculator from "../components/Calculator";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";

export default function Home() {

    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box margin={{ margin: '96px 0', md: '120px 16px 0', lg: '120px auto 0' }} maxWidth="1248px">
            <TabContext value={value}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                        },
                    }}
                >
                    <Tab label="Torso" value="1" sx={{ fontFamily: 'Source Sans Bold', fontSize: '1rem' }} />
                    <Tab label="Sleeve" value="2" sx={{ fontFamily: 'Source Sans Bold', fontSize: '1rem' }} />
                    <Tab label="Skirt" value="3" sx={{ fontFamily: 'Source Sans Bold', fontSize: '1rem' }} />
                    <Tab label="Pant" value="4" sx={{ fontFamily: 'Source Sans Bold', fontSize: '1rem' }} />
                </Tabs>
                <TabPanel value="1" keepMounted={true} sx={{ padding: 0 }}><Calculator title="Torso Calculator" height="1897.42px" variant="torso" /></TabPanel>
                <TabPanel value="2" keepMounted={true} sx={{ padding: 0 }}><Calculator title="Sleeve Calculator" height="723.783px" variant="sleeve" /></TabPanel>
                <TabPanel value="3" keepMounted={true} sx={{ padding: 0 }}><Calculator title="Skirt Calculator" height="444.283px" variant="skirt" /></TabPanel>
                <TabPanel value="4" keepMounted={true} sx={{ padding: 0 }}><Calculator title="Pant Calculator" height="816.95px" variant="pant" /></TabPanel>
            </TabContext>
        </Box>
    );
}
