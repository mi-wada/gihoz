import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { COLORS } from "../constants";

const Header = () => {
  return (
    <Box m={3} display='flex' justifyContent='center'>
      <Link href={'/'}>
        {/* <Box component='a'> */}
        <a>
        <Typography variant='h2' color={COLORS.main} fontWeight='bold'>
            Toy Box
          </Typography>
        </a>
        {/* </Box> */}
      </Link>
    </Box>
  )
};

export default Header;
