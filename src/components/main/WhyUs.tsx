import React from 'react'
import {AiFillClockCircle, AiFillBell, AiFillLike} from 'react-icons/ai'
import WhyUsCard from '../utils/WhyUsCard'
import { useTranslation } from 'next-i18next'


function WhyUs() {
    const { t:translation } = useTranslation(['index'])
    const whyUs = [
        {
            title:  <h3 className='font-bold text-mainColor text-xl flex'><p className='text-accentColor'>B</p>{translation("revidade")}</h3>,
            description:translation("Nossos clientes não tem tempo a perder. Somos comprometidos com a rapidez no atendimento e com o respeito aos prazos estabelecidos."),
            image: <AiFillClockCircle className='fill-accentColor w-14 h-auto'/>
        },
        {
            title: <h3 className='font-bold text-mainColor text-xl flex'><p className='text-accentColor'>A</p>{translation("cessibilidade")}</h3>,
            description:translation("Oferecemos atendimento personalizado a todos que nos procuram, com o intuíto de entender as necessidades individuais de cada um e de alcançar os melhores resultados."),
            image: <AiFillBell className='fill-accentColor w-14 h-auto'/>
        },
        {
            title: <h3 className='font-bold text-mainColor text-xl flex'><p className='text-accentColor'>M</p>{translation("otivação")}</h3>,
            description:translation("Nossa equipe é formada por profissionais altamente capacitados que são apaixonados pelo que fazem. Somos empenhados a dar o nosso melhor para que os nossos clientes fiquem satisfeitos."),
            image: <AiFillLike className='fill-accentColor w-14 h-auto'/>
        }
    ]

  return (
    <section className='flex justify-center items-center flex-col px-1 sm:px-8 py-8  mb-12 bg-mainColor'>
    <h2 className='text-center text-white font-bold text-4xl py-6'>{translation("Por Que Escolher A BAM?")}</h2>
    <hr className='w-2/6 sm:w-1/12 border-2 mb-10 border-accentColor bg-accentColor'/>
    <div className='block sm:grid sm:grid-cols-3 sm:gap-10'>
    {
        whyUs.map(function({title, description, image},index){
            return <WhyUsCard key={index} title={title} description={description} image={image}></WhyUsCard>
        })
    }
    </div>
  </section>
  )
}

export default WhyUs