import Footer from '@/components/utils/Footer'
import NavBar from '@/components/utils/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <><NavBar></NavBar>
    <Component {...pageProps} />
    <Footer></Footer></>
  )

}
