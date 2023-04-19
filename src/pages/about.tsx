import Title from '@/components/about/Title'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

interface props {
    locale: string
}

function about() {
    return (
        <Title></Title>
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
export default about