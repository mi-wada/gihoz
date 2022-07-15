import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        width: '100%',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
      }}
    >
      <Typography sx={{ color: 'white' }}>© Toy Box</Typography>
    </Box>
  )
}

export default Footer
