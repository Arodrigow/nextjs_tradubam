import React from 'react'
import Slider from '../utils/Slider'
import { useTranslation } from 'next-i18next'

function OurClients() {
  const { t:translation } = useTranslation(['index'])
  return (
    <section className='flex justify-center items-center flex-col sm:px-8 sm:py-8  mb-12 bg-white'>
    <h2 className='text-center text-mainColor font-bold text-4xl py-6'>{translation("Nossos Clientes Satisfeitos!")}</h2>
    <hr className='w-2/6 sm:w-1/12 border-2 mb-10 border-accentColor bg-accentColor'/>
    <Slider></Slider>
  </section>
  )
}

export default OurClients