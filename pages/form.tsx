import { InputOutlined, TextFieldsOutlined } from '@mui/icons-material'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { COLORS } from '../constants'

const Title = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
    <Typography variant='h4' sx={{ fontWeight: 'bold', color: COLORS.main }}>
      落とし物登録
    </Typography>
  </Box>
)

const NameField = () => {
  const [name, setName] = useState('')
  const [errorOccured, setErrorOccured] = useState(false)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setErrorOccured(event.target.value.length > 20)

    setName(event.target.value)
  }

  return (
    <>
      <TextField
        label='名称'
        required
        sx={{ width: '100%' }}
        onChange={onChange}
        value={name}
        error={errorOccured}
      />
      <Typography variant='caption' sx={{ color: 'red', display: errorOccured ? 'block' : 'none' }}>
        20字以下で入力してください
      </Typography>
    </>
  )
}

const Form: NextPage = () => {
  const submit = () => {
    console.log('POST /hoge')
  }

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}
    >
      <Box
        sx={{
          width: '500px',
          boxShadow: 5,
          backgroundColor: 'white',
          borderRadius: '25px',
        }}
      >
        <Title />
        <Grid
          container
          spacing={2}
          sx={{ display: 'flex', justifyContent: 'center', padding: '40px' }}
        >
          <Grid item xs={12}>
            <NameField />
          </Grid>
          <Grid item xs={12}>
            <TextField label='名称' sx={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='outlined' sx={{ marginTop: '10px' }} onClick={submit}>
              送信
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Form
