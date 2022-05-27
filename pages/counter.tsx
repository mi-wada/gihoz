import { AddBox, IndeterminateCheckBox } from '@mui/icons-material';
import { Container, Grid, IconButton, Typography } from '@mui/material';
import type { NextPage } from 'next'
import React, { useCallback, useState } from 'react'

const Counter: NextPage = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    // もしも以下のようにしてインクリメントする場合、ボタンを何度押してもcountの値は1にしかならない。
    // その理由は、この中は初回レンダー時しか呼ばれず、初回レンダー時の0がcountに束縛されるため。
    // `setCount(count + 1)`
    setCount(prevCount => prevCount + 1);
  }, []);
  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <Container sx={{mt: 20, mb: 20}}>
      <Grid container direction='column' alignContent='center'>
        <Typography variant='h3' textAlign='center'>
          {count}
        </Typography>
        <Grid container justifyContent='center'>
          <IconButton onClick={decrement}>
            <IndeterminateCheckBox/>
          </IconButton>
          <IconButton onClick={increment}>
            <AddBox/>
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Counter;
