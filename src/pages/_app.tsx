import { appWithTranslation } from 'next-i18next'
import Footer from '@/components/utils/Footer'
import NavBar from '@/components/utils/NavBar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <><NavBar></NavBar>
    <Component {...pageProps} />
    <Footer></Footer></>
  )

}

export default appWithTranslation(App)
