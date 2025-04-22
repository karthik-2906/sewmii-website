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
    colorPrimary?: string;
    colorSecondary?: string;
    backgroundColor?: string;
}

export default function Button3D({
    href,
    children,
    newTab = true,
    fontSize = '16px',
    image = null,
    padding = '8px 16px',
    colorPrimary = 'var(--color-primary)',
    colorSecondary = 'var(--color-secondary)',
    backgroundColor = 'var(--background)'
}: Button3DProps) {
    return (
        <Box
            component="div"
            className='button'
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
                    backgroundColor: colorSecondary,
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
                color={colorPrimary}
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    backgroundColor: backgroundColor,
                    border: `3px solid ${colorSecondary}`,
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
                        color={colorPrimary}
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