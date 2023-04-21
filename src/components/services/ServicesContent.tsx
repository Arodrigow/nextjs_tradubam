import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React from 'react'

import ServiceTranslation from './../../public/images/ServiceTranslation.jpg'
import English from './../../public/images/English.png'
import Portuguese from './../../public/images/Portuguese.png'

function ServicesContent() {
    const { t: translation } = useTranslation('services')

    return (
        <main>
            <div className='flex justify-around items-center p-4 sm:p-12'>
                    <Image src={ServiceTranslation} alt='Image related to the translation service provided' className='hidden lg:block rounded-xl lg:w-[40%]'></Image>
                <div className='sm:px-16'>
                    <h2 className='text-2xl font-bold pb-2 text-mainColor'>{translation("Tradução")}</h2>
                    <h3 className='text-lg font-bold pb-2 text-mainColor'>{translation("Traduções Simples")}</h3>
                    <p>{translation("Também chamadas de “Traduções livre”, são aquelas que convertem para Português, textos originais de outros idiomas para fins não oficiais, ou seja, que não precisam ter validade jurídica. Por exemplo: abstracts, trabalhos de pesquisa, artigos em geral, cartas, etc.")}</p>
                    <br />
                    <h3 className='text-lg font-bold pb-2 text-mainColor'>{translation("Tradução Técnica")}</h3>
                    <p>{translation("São traduções especializadas em materiais técnicos, ou seja, que convertem em Português, textos originais de outro idioma, que possuam linguagem específica de alguma determinada área. Exemplo: Abstracts, projetos de pesquisa, documentos, contratos, teses, manuais, etc.")}</p>
                    <br />
                    <h4 className='pb-2 text-base font-bold text-mainColor'>{translation("Línguas Disponíveis")}</h4>
                    <div className='flex'>
                        <Image src={Portuguese} alt='Brazilian flag' className='h-7 pr-2 w-auto'></Image>
                        <Image src={English} alt='American flag' className='h-7 pr-2 w-auto'></Image>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ServicesContent