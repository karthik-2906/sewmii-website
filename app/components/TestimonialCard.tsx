import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useRef, useEffect, useState } from 'react';

interface TestimonialCardProps {
    name: string;
    review: string;
}

const quoteIcon = (
    <svg fill="#423f3f" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="796 698 200 200" enableBackground="new 796 698 200 200" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26 C836.948,771.39,858.598,749.739,885.208,749.739z"></path> <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26 C947.74,771.39,969.39,749.739,996,749.739z"></path> </g> </g></svg>
);


const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, review }) => {
    const innerBoxRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | undefined>();

    useEffect(() => {
        if (innerBoxRef.current) {
            setHeight(innerBoxRef.current.offsetHeight);
        }
    }, [review, name]);

    return (
        <Box component={"div"} sx={{ backgroundColor: "var(--calculator-3d-background)", height: height ? `${height}px` : 'auto', margin: "48px 32px 16px 16px", position: "relative", maxWidth: 600 }}>
            <Box component={"div"} ref={innerBoxRef} sx={{ backgroundColor: "var(--calculator-background)", border: "3px solid var(--calculator-3d-background)", width: "100%", position: "absolute", left: "16px", bottom: "16px", padding: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {quoteIcon}
                <Typography variant="h6" sx={{ fontFamily: "Source Sans Regular", color: 'var(--calculator-3d-background)', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4, overflow: 'hidden' }}>{review}</Typography>
                {/* <Typography variant="h6" sx={{ fontFamily: "Source Sans Regular", color: 'var(--calculator-3d-background)' }}>{review}</Typography> */}
                <Typography variant="subtitle1" textAlign={'right'} sx={{ fontFamily: "Source Sans Regular", color: 'gray' }}>- {name}</Typography>
            </Box>
        </Box>
    )
};

export default TestimonialCard;