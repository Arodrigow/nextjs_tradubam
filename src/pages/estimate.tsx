import EstimateContent from '@/components/estimate/EstimateContent'
import Title from '@/components/utils/Title'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

function estimate() {
    const {t:translation} = useTranslation('estimate')
  return (
    <>
    <Title title={translation("Orçamento")} subtitle={translation("Peça grátis!")}></Title>
    <EstimateContent></EstimateContent>
    </>
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
          'estimate',
          'all'
        ])),
      },
    }
  }
export default estimate