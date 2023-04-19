import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

function contact() {
  return (
    <div>contact</div>
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
export default contact