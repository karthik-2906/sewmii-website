import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';

interface TestimonialCardProps {
    name: string;
    review: string;
    image: string;
}

const quoteIcon = (
    <svg fill="#423f3f" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="796 698 200 200" enableBackground="new 796 698 200 200" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26 C836.948,771.39,858.598,749.739,885.208,749.739z"></path> <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26 C947.74,771.39,969.39,749.739,996,749.739z"></path> </g> </g></svg>
);


const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, review, image }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleOpenOverlay = () => setIsOverlayOpen(true);
    const handleCloseOverlay = () => setIsOverlayOpen(false);

    useEffect(() => {
        if (isOverlayOpen) {
            document.body.classList.add('disable-body-scroll');
        } else {
            document.body.classList.remove('disable-body-scroll');
        }

        return () => {
            document.body.classList.remove('disable-body-scroll');
        };
    }, [isOverlayOpen]);

    return (
        <>
            <Box
                component={"div"}
                margin={{
                    margin: '48px 32px 32px 16px',
                    sm: '48px 32px 32px 0',
                    lg: '48px 24px 32px 8px'
                }}
                sx={{
                    backgroundColor: "var(--calculator-3d-background)",
                    height: { xs: '336px', sm: '304px' },
                    position: "relative",
                    maxWidth: 600,
                    '&:hover > div': {
                        left: 8,
                        bottom: 8,
                    }
                }}
            >
                <Box
                    component={"div"}
                    onClick={handleOpenOverlay}
                    sx={{
                        backgroundColor: "var(--calculator-background)",
                        border: "3px solid var(--calculator-3d-background)",
                        width: "100%",
                        height: { xs: '336px', sm: '304px' },
                        position: "absolute",
                        left: "16px",
                        bottom: "16px",
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        transition: 'left 0.3s ease, bottom 0.3s ease',
                        '&:hover': {
                            left: 0,
                            bottom: 0,
                        }
                    }}
                >
                    {quoteIcon}
                    <Typography variant="h6" margin={'16px 0'} sx={{ fontFamily: "Source Sans Regular", color: 'var(--calculator-3d-background)', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: { xs: 5, sm: 4 }, overflow: 'hidden' }}>{review}</Typography>
                    <Typography variant="subtitle1" marginTop={'auto'} textAlign={'right'} sx={{ fontFamily: "Source Sans Regular", color: 'gray' }}>- {name}</Typography>
                </Box>
            </Box>
            <Modal open={isOverlayOpen} onClose={handleCloseOverlay} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)' }}>
                <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Box onClick={handleCloseOverlay} sx={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }} />
                    <Box component="img" src={image} alt="Testimonial" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, maxWidth: { xs: '90%', sm: '600px' }, maxHeight: '90%', borderRadius: 4, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }} />
                </Box>
            </Modal>

        </>
    )
};

export default TestimonialCard;