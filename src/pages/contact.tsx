import ContactContent from '@/components/contact/ContactContent'
import Title from '@/components/utils/Title'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

function Contact() {
  const {t:translation} = useTranslation('contact')

  return (
    <>
    <Title title={translation('Contato')} subtitle={translation('Nos Mande Uma Mensagem!')}></Title>
    <ContactContent></ContactContent>
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
          'contact',
          'all'
        ])),
      },
    }
  }
export default Contact