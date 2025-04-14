import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

interface Button3DProps {
    href: string;
    children: ReactNode;
    newTab?: boolean;
    fontSize?: string;
    image?: ReactNode;
    padding?: string;
}

export default function Button3D({
    href,
    children,
    newTab = true,
    fontSize = '16px',
    image = null,
    padding = '8px 24px'
}: Button3DProps) {
    return (
        <Box
            component="div"
            sx={{
                position: 'relative',
                display: 'inline-block',
            }}
        >
            <Box
                component="div"
                sx={{
                    position: 'absolute',
                    top: '4px',
                    left: '-4px',
                    right: '4px',
                    bottom: '-4px',
                    backgroundColor: 'var(--calculator-3d-background)',
                    zIndex: 1
                }}
            />

            <Link
                target={newTab ? '_blank' : '_self'}
                rel="noopener noreferrer"
                href={href}
                underline="none"
                display="flex"
                alignItems="center"
                gap="4px"
                padding={padding}
                color='var(--calculator-3d-background)'
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    backgroundColor: "var(--background)",
                    border: '3px solid var(--calculator-3d-background)',
                    transform: 'translate(0, 0)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translate(-4px, 4px)',
                    }
                }}
            >
                <Box component="span" sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {image}
                    <Typography
                        variant="h6"
                        color="var(--foreground)"
                        fontSize={fontSize}
                        fontFamily={'Source Sans Regular'}
                    >
                        {children}
                    </Typography>
                </Box>
            </Link>
        </Box>
    );
}