import { Box, Link, Typography } from "@mui/material";

interface ContactCardProps {
    title: string;
    profileName?: string;
    desc: string;
    link: string;
}

export default function ContactCard({
    title,
    profileName = 'sewmii',
    desc,
    link
}: ContactCardProps) {
    return (
        <Link href={link} target={"_blank"}
            className='contact-card'
            sx={{
                position: 'relative',
                display: 'inline-block',
                textDecoration: 'none',
                color: 'inherit'
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
                    backgroundColor: 'var(--color-secondary)',
                    zIndex: 1,
                    borderRadius: 1,
                }}
            />
            <Box
                sx={{
                    backgroundColor: 'var(--component-background)',
                    position: 'relative',
                    zIndex: 2,
                    padding: '0 16px 16px',
                    border: '3px solid var(--color-secondary)',
                    borderRadius: 1,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translate(-4px, 4px)',
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 2,
                    }}
                >
                    <Box>
                        <Typography variant="subtitle1" fontFamily="Source Sans Regular" fontSize={20} marginTop={2}>{title}</Typography>
                    </Box>
                    <Box sx={{
                        backgroundColor: 'var(--color-accent);',
                        padding: 1,
                        height: 60,
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        border: '3px solid var(--color-secondary)',
                        borderTop: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'end'
                    }}
                    >
                        <Typography variant="subtitle2" fontFamily="Source Sans Regular" fontSize={10}>@{profileName}</Typography>
                    </Box>
                </Box>
                <Typography variant="subtitle2" fontFamily='Source Sans Regular' mt={2}>
                    {desc}
                </Typography>
            </Box>
        </Link>
    );
}
