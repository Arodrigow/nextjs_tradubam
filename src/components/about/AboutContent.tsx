import { useTranslation } from 'next-i18next'
import React from 'react'
import AboutCard from '../utils/AboutCard'

function AboutContent() {

    const {t:translation} = useTranslation('about')

  return (
    <main className='flex flex-col justify-center items-center p-2 sm:p-6'>
        <h1 className='text-base sm:text-xl sm:px-10 py-6 font-bold text-mainColor text-center'>
            {translation("A BAM É A Realização De Um Sonho De Tradutores Autônomos Que Se Uniram Para Prestar Serviços De Alta Qualidade E Levar Informações Para O Maior Número De Pessoas, Uma Palavra Por Vez.")}
        </h1>
        <br />
        <p className='text-center pb-12'>
            {translation("Você já se perguntou quantos fatos históricos teriam se perdido no tempo, quantos livros incríveis nunca teriam sido lidos e ou quantas pesquisas importantes nunca teriam sido estudadas se alguém não tivesse passado a informação adiante e adaptado para o seu próprio idioma?")}
            <br/>
            <br />
            {translation("Por trás de quase tudo o que vemos, existem profissionais da tradução. Graças a eles,  a barreira da linguagem é destruída e, como mágica, temos acesso a conteúdo, entretenimento e notícias de todos os lugares.")}
            <br />
            <br />
            {translation("Nós da BAM acreditamos na importância deste trabalho e, acima de tudo, o respeitamos. Somos apaixonados pelo que fazemos e, por isso, estamos na constante busca de aperfeiçoamento para oferecer sempre o que há de melhor aos nossos clientes.")}
        </p>
        <div className='flex flex-col sm:flex-row sm:justify-around items-center sm:px-10 pb-10'>
            <AboutCard title={translation("Missão")} content={translation("Tirar os limites da língua que te impedem de conquistar os seus objetivos.")}></AboutCard>
            <AboutCard title={translation("Visão")} content={translation("Ser referência em consultoria de idiomas, atendendo as expectativas dos nossos clientes e contribuindo para  a realização de sonhos.")}></AboutCard>
        </div>
    </main>
  )
}

export default AboutContent