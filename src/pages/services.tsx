import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

function services() {
  return (
    <div>services</div>
  )
}
interface props {
  locale:string
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
export default services