import ServicesContent from '@/components/services/ServicesContent'
import Title from '@/components/utils/Title'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

function Services() {
  const { t: translation } = useTranslation('services')

  return (
    <>
      <Title title={translation("Que prestamos!")} subtitle={translation("Serviços")}></Title>
      <ServicesContent></ServicesContent>
    </>
  )
}
interface props {
  locale: string
}
export async function getStaticProps({ locale }: props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'services',
        'all'
      ])),
    },
  }
}
export default Services