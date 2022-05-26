import { Container, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Toy from '../components/toy'

const Home: NextPage = () => {
  return (
    <Container sx={{m: 2}}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Toy title='Stopwatch' description='simple stopwatch' href='/stopwatch' />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
