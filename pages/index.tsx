import { Container, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Toy from '../components/toy'

const Home: NextPage = () => {
  return (
    <Container sx={{ m: 6 }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Toy title='Stopwatch' description='simple stopwatch' href='/stopwatch' />
        </Grid>
        <Grid item xs={3}>
          <Toy title='Counter' description='simple counter' href='/counter' />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
