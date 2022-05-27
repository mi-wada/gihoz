import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
