import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link"
import Image from 'next/image';

export default function Home() {
  return (
    <Box component={'div'} margin={'96px 16px 0'}>
      <Typography variant="h2" fontFamily={'Source Sans Bold'}>Under Development</Typography>
      <Link href="https://shopee.ph/sewmii" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1} marginTop={4} >
        <Image src={"/icons/shopee.svg"} alt={'Shopee logo'} height={32} width={32} style={{ display: 'block' }} />
        <Typography variant="h5" fontFamily={'Source Sans Regular'}>Shopee</Typography>
      </Link>
      <Link href="https://www.tiktok.com/@sewmii.studio" color="inherit" sx={{ textDecoration: 'none' }} display={'flex'} gap={1} marginTop={4} >
        <Image src={"/icons/tiktok.svg"} alt={'Shopee logo'} height={32} width={32} style={{ display: 'block' }} />
        <Typography variant="h5" fontFamily={'Source Sans Regular'}>Tiktok</Typography>
      </Link>
    </Box>
  );
}
