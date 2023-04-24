import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React from 'react'

import ServiceTranslation from './../../public/images/ServiceTranslation.jpg'
import ServiceVersion from './../../public/images/technical.jpg'
import ServiceAudiovisual from './../../public/images/audiovisual.jpg'
import ServiceBusiness from './../..//public/images/business.jpg'
import English from './../../public/images/English.png'
import Portuguese from './../../public/images/Portuguese.png'

function ServicesContent() {
    const { t: translation } = useTranslation('services')

    return (
        <main>
            {/*===Tradução===*/}
            <section className='flex justify-around items-center p-4 sm:p-12'>
                <Image src={ServiceTranslation} alt='Image related to the translation services provided' className='hidden lg:block rounded-xl lg:w-[40%]'></Image>
                <div className='sm:px-16'>
                    <h2 className='text-2xl font-bold pb-2 text-mainColor'>{translation("Tradução")}</h2>
                    <h3 className='text-lg font-bold pb-2 text-mainColor'>{translation("Traduções Simples")}</h3>
                    <p>{translation("Também chamadas de Traduções livre, são aquelas que convertem para Português, textos originais de outros idiomas para fins não oficiais, ou seja, que não precisam ter validade jurídica. Por exemplo abstracts, trabalhos de pesquisa, artigos em geral, cartas, etc.")}</p>
                    <br />
                    <h3 className='text-lg font-bold pb-2 text-mainColor'>{translation("Tradução Técnica")}</h3>
                    <p>{translation("São traduções especializadas em materiais técnicos, ou seja, que convertem em Português, textos originais de outro idioma, que possuam linguagem específica de alguma determinada área. Exemplo Abstracts, projetos de pesquisa, documentos, contratos, teses, manuais, etc.")}</p>
                    <br />
                    <h4 className='pb-2 text-base font-bold text-mainColor'>{translation("Línguas Disponíveis")}</h4>
                    <div className='flex'>
                        <Image src={Portuguese} alt='Brazilian flag' className='h-7 pr-2 w-auto'></Image>
                        <Image src={English} alt='American flag' className='h-7 pr-2 w-auto'></Image>
                    </div>
                </div>
            </section>
            {/*===Versão===*/}
            <section className='flex justify-around items-center p-4 sm:p-12'>
                <div className='sm:px-16'>
                    <h2 className='text-2xl font-bold pb-2 text-mainColor'>{translation("Versão")}</h2>
                    <h3 className='text-lg font-bold pb-2 text-mainColor'>{translation("Versão Simples")}</h3>
                    <p>{translation("São aquelas que convertem para um idioma estrangeiro, textos originais em Português para fins não oficiais, ou seja, que não precisam ter validade jurídica. Por exemplo abstracts, trabalhos de pesquisa, artigos em geral, cartas, etc.")}</p>
                    <br />
                    <h3 className='text-lg font-bold pb-2 text-mainColor'>{translation("Versão Técnica")}</h3>
                    <p>{translation("São aquelas que convertem para um idioma estrangeiro, textos originais em Português, que possuam linguagem específica de alguma determinada área. Exemplo Abstracts, projetos de pesquisa, documentos, contratos, teses, manuais, etc.")}</p>
                    <br />
                    <h4 className='pb-2 text-base font-bold text-mainColor'>{translation("Línguas Disponíveis")}</h4>
                    <div className='flex'>
                        <Image src={Portuguese} alt='Brazilian flag' className='h-7 pr-2 w-auto'></Image>
                        <Image src={English} alt='American flag' className='h-7 pr-2 w-auto'></Image>
                    </div>
                </div>
                <Image src={ServiceVersion} alt='Image related to the versioning services provided' className='hidden lg:block rounded-xl lg:w-[40%]'></Image>
            </section>
            {/*===Audiovisual===*/}
            <section className='flex justify-around items-center p-4 sm:p-12'>
                <Image src={ServiceAudiovisual} alt='Image related to the audio-visual services provided' className='hidden lg:block rounded-xl lg:w-[40%]'></Image>
                <div className='sm:px-16'>
                    <h2 className='text-2xl font-bold pb-2 text-mainColor'>{translation("Audiovisual")}</h2>
                    <h3 className='text-lg font-bold pb-2 text-mainColor'>{translation("Transcrição")}</h3>
                    <p>{translation("A Transcrição de um áudio, ou de um vídeo, é a transformação do conteúdo ouvido em material escrito.")}</p>
                    <br />
                    <h3 className='text-lg font-bold pb-2 text-mainColor'>{translation("Legendagem")}</h3>
                    <p>{translation("É uma das modalidades da tradução audiovisual que transforma material em vídeo ou áudio em texto. A legenda pode ser criada tanto no idioma original, quanto de um idioma estrangeiro para Português, facilitando a compreensão do espectador.")}</p>
                    <br />
                    <h4 className='pb-2 text-base font-bold text-mainColor'>{translation("Línguas Disponíveis")}</h4>
                    <div className='flex'>
                        <Image src={Portuguese} alt='Brazilian flag' className='h-7 pr-2 w-auto'></Image>
                        <Image src={English} alt='American flag' className='h-7 pr-2 w-auto'></Image>
                    </div>
                </div>
            </section>
            {/*===Para Empresas===*/}
            <section className='flex justify-around items-center p-4 sm:p-12'>
                <div className='sm:px-16'>
                    <h2 className='text-2xl font-bold pb-5 text-mainColor'>{translation("Para Empresas")}</h2>
                    <p>{translation("A solução que trazemos para você é um setor que te dê suporte em todas as transações internacionais que precisar.")}</p>
                    <br />
                    <ul className='text-mainColor list-disc pl-10'>
                        <li><p>{translation("Tradução de contrato e propostas;")}</p></li>
                        <li><p>{translation("Interpretação de videochamadas;")}</p></li>
                        <li><p>{translation("Auxílio na elaboração de propostas;")}</p></li>
                        <li><p>{translation("Tradução do seu site para línguas estrangeiras;")}</p></li>
                        <li><p>{translation("Aulas particulares de Inglês para a diretoria e equipe.")}</p></li>
                    </ul>
                    <br />
                    <p>{translation("Atuaremos como parte da sua empresa, uma equipe de relações internacionais, com toda a responsabilidade, segurança e profissionalismo que a BAM oferece. Com isso, a sua empresa poderá fazer mais negócios e aumentar sua cartela de clientes.")}</p>
                    <br />
                    <h4 className='pb-2 text-base font-bold text-mainColor'>{translation("Línguas Disponíveis")}</h4>
                    <div className='flex'>
                        <Image src={Portuguese} alt='Brazilian flag' className='h-7 pr-2 w-auto'></Image>
                        <Image src={English} alt='American flag' className='h-7 pr-2 w-auto'></Image>
                    </div>
                </div>
                <Image src={ServiceBusiness} alt='Image related to the business services provided' className='hidden lg:block rounded-xl lg:w-[40%]'></Image>

            </section>
        </main>
    )
}

export default ServicesContent