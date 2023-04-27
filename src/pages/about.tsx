import AboutContent from '@/components/about/AboutContent'
import Title from '@/components/utils/Title'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

interface props {
    locale: string
}

function About() {    
    const {t:translation} = useTranslation('about')
    
    return (
        <>
            <Title title={translation('Sobre Nós')} subtitle={translation('Algumas Palavras')}></Title>
            <AboutContent></AboutContent>
        </>
    )
}

export async function getStaticProps({ locale }: props) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common',
                'about',
                'all'
            ])),
        },
    }
}
export default About