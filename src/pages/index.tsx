import Abovethefold from '@/components/Abovethefold'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>BAM - Traduções e Consultoria em Línguas Estrangeiras</title>
        <meta name="description" content="Traduções e Consultoria em Línguas Estrangeiras" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
      <main >
        <Abovethefold></Abovethefold>
      </main>
    </>
  )
}
