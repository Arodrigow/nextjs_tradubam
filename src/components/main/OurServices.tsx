import React from 'react'
import {AiFillBook, AiFillRead} from 'react-icons/ai'
import {BsPcDisplay} from 'react-icons/bs'
import {FaBusinessTime} from 'react-icons/fa'
import LearnMoreButton from '../utils/LearnMoreButton'
import MainServiceCard from '../utils/MainServiceCard'

function OurServices() {
  const services = [
    {
      serviceName: "Tradução",
      serviceDescription: "Oferecemos serviços de tradução Simples e Técnica.",
      serviceIcon: <AiFillBook className='fill-accentColor w-6 h-auto'/>,     
    },
    {
      serviceName: "Versão",
      serviceDescription: "Oferecemos serviços de versão Simples e Técnica.",
      serviceIcon: <AiFillRead className='fill-accentColor w-6 h-auto'/>, 
    },
    {
      serviceName: "Audiovisual",
      serviceDescription: "Podemos ajudar em seu projeto audiovisual através dos serviços de Transcrição e Legendagem.",
      serviceIcon: <BsPcDisplay className='fill-accentColor w-6 h-auto'/>,
    },
    {
      serviceName: "Para empresas",
      serviceDescription: "Aqui na BAM te damos o suporte necessário para que a sua empresa avance sem os impedimentos da língua estrangeira.",
      serviceIcon: <FaBusinessTime className='fill-accentColor w-6 h-auto'/>,
    },    
  ]

  return (
    <section className='flex justify-center items-center flex-col p-8 '>
      <h2 className='text-mainColor font-bold text-4xl py-12'>Nossos Serviços</h2>
      <div className='block sm:grid sm:grid-cols-3 sm:gap-10'>
          <div className='hidden sm:block sm:row-span-2 sm:rounded-2xl sm:p-4 sm:bg-mainColor '> 
            <h3 className='text-white text-3xl font-bold'>Precisa Que Traduzam O Seu Abstract?</h3>
            <br />
            <p className='text-white'>Quer publicar em uma revista internacional mas não sabe o idioma? <br/>
                Precisa de ajuda para lidar com clientes estrangeiros?
                <br/>
                <br/>
                Então, BAM! Os seus problemas estão revolvidos.</p>
                <br />
                <LearnMoreButton to="/"></LearnMoreButton>
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