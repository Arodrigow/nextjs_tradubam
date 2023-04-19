import Abovethefold from '@/components/main/Abovethefold'
import OurClients from '@/components/main/OurClients'
import OurServices from '@/components/main/OurServices'
import WhyUs from '@/components/main/WhyUs'
import Head from 'next/head'

import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

interface props {
  locale:string
}

export default function Home() {

  const { t:translation } = useTranslation(['index','common'])

  return (
    <>
      <Head>
        <title>{translation('BAM - Traduções e Consultoria em Línguas Estrangeiras')}</title>
        <meta name="description" content="Traduções e Consultoria em Línguas Estrangeiras" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
      <main >
        <Abovethefold></Abovethefold>
        <OurServices></OurServices>
        <WhyUs></WhyUs>
        <OurClients></OurClients>
      </main>
    </>
  )
}
export async function getStaticProps({locale}:props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'index',
        'all'
      ])),
    },
  }
}