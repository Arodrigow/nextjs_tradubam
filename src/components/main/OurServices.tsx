import React from 'react'
import {AiFillBook, AiFillRead} from 'react-icons/ai'
import {BsPcDisplay} from 'react-icons/bs'
import {FaBusinessTime} from 'react-icons/fa'
import LearnMoreButton from '../utils/LearnMoreButton'
import MainServiceCard from '../utils/MainServiceCard'
import { useTranslation } from 'next-i18next'

function OurServices() {

  const { t:translation } = useTranslation(['index'])

  const services = [
    {
      serviceName: translation("Tradução"),
      serviceDescription: translation("Oferecemos serviços de tradução Simples e Técnica."),
      serviceIcon: <AiFillBook className='fill-accentColor w-6 h-auto'/>,     
    },
    {
      serviceName: translation("Versão"),
      serviceDescription: translation("Oferecemos serviços de versão Simples e Técnica."),
      serviceIcon: <AiFillRead className='fill-accentColor w-6 h-auto'/>, 
    },
    {
      serviceName: translation("Audiovisual"),
      serviceDescription: translation("Podemos ajudar em seu projeto audiovisual através dos serviços de Transcrição e Legendagem."),
      serviceIcon: <BsPcDisplay className='fill-accentColor w-6 h-auto'/>,
    },
    {
      serviceName: translation("Para empresas"),
      serviceDescription: translation("Aqui na BAM te damos o suporte necessário para que a sua empresa avance sem os impedimentos da língua estrangeira."),
      serviceIcon: <FaBusinessTime className='fill-accentColor w-6 h-auto'/>,
    },    
  ]

  return (
    <section className='flex justify-center items-center flex-col px-8 py-4  mb-12'>
      <h2 className='text-center text-mainColor font-bold text-4xl py-6'>{translation("Nossos Serviços")}</h2>
      <hr className='w-2/6 sm:w-1/12 border-2 mb-10 border-accentColor bg-accentColor'/>
      <div className='block sm:grid sm:grid-cols-3 sm:gap-10'>
          <div className='hidden sm:block sm:row-span-2 sm:rounded-2xl sm:p-4 sm:bg-mainColor sm:shadow-lg sm:shadow-mainColor'> 
            <h3 className='text-white text-3xl font-bold'>{translation("Precisa Que Traduzam O Seu Abstract?")}</h3>
            <br />
            <p className='text-white'>{translation("Quer publicar em uma revista internacional mas não sabe o idioma?")} <br/>
                {translation("Precisa de ajuda para lidar com clientes estrangeiros?")}
                <br/>
                <br/>
                {translation("Então, BAM! Os seus problemas estão revolvidos.")}</p>
                <br />
                <LearnMoreButton to="/" text={translation("Saber mais.")}></LearnMoreButton>
          </div>
        {
        services.map(function({serviceName, serviceDescription, serviceIcon}, index) {
          return <MainServiceCard key={index} serviceName={serviceName} serviceDescription={serviceDescription} serviceIcon={serviceIcon}></MainServiceCard>
        })
        }
      </div> 
    </section>
  )
}

export default OurServices