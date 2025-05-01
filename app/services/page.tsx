import { Box, Typography } from "@mui/material";
import Banner from "../components/Banner";
import ShopCard from "../components/ShopCard";
import { shopLinks } from "@/public/data/shopLinks";
import ContactCard from "../components/ContactCard";
import { contactLinks } from "@/public/data/contactLinks";


export default function Home() {
    return (
        <Box
            component="div"
            className="main-container"
            padding={{ xs: '62px 0 0', md: '94px 0 0' }}
        >

            {/* Banner */}
            <Banner image="/images/banner shadow test img.png" imageMobile="/images/banner shadow test img mobile.png" />

            {/* Services Intro */}
            <Box
                margin={{ xs: '32px 16px 0', md: '48px 16px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'}>Sewmii Pattern Studio</Typography>
                <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={'1.25rem'} marginTop={2} marginBottom={2}>At Sewmii Pattern Studio, we offer premium quality printed patterns for sewing enthusiasts, aspiring designers, and garment businesses. Our patterns are designed to facilitate those who wish to embark on sewing as a hobby but lack pattern-making skills, as well as those looking to create bespoke garments at home or for commercial purposes.</Typography>
            </Box>

            {/* Shop links */}
            <Box
                margin={{ xs: '32px 16px 0', md: '48px 16px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'} mb={2}>Buy Sewing Patterns</Typography>
                <Typography variant='subtitle1' fontFamily={'Source Sans Regular'} fontSize={'1.25rem'} mb={2}>We offer high grade physical and digital patterns in the following websites</Typography>
                <Box
                    display="grid"
                    gap={2}
                    sx={{
                        gridTemplateColumns: {
                            xs: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(5, 1fr)',
                        },
                    }}
                >
                    {shopLinks.map((shop, index) => (
                        <ShopCard
                            key={index}
                            title={shop.title}
                            shopName={shop.shopName}
                            shopDesc={shop.shopDesc}
                            link={shop.link}
                            image={shop.img}
                            imageAlt={shop.imageAlt}
                            location={shop.location}
                            locationImage={shop.locationImg}
                            locationImageAlt={shop.locationImgAlt}
                        />
                    ))}
                </Box>
            </Box>

            {/* Social media links */}
            <Box
                margin={{ xs: '32px 16px 0', md: '48px 16px 0', lg: '64px auto 0' }}
                maxWidth="1248px"
            >
                <Typography variant="h2" fontFamily={'Source Sans Bold'} fontSize={'2rem'} mb={2}>Connect with us</Typography>
                <Box
                    display="grid"
                    gap={2}
                    sx={{
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)',
                        },
                    }}
                >
                    {contactLinks.map((contact, index) => (
                        <ContactCard
                            key={index}
                            title={contact.title}
                            profileName={contact.profileName}
                            desc={contact.desc}
                            link={contact.link}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
