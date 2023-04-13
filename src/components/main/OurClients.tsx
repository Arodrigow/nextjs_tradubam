import React from 'react'
import Slider from '../utils/Slider'

function OurClients() {
  return (
    <section className='flex justify-center items-center flex-col px-8 py-8  mb-12 bg-white'>
    <h2 className='text-mainColor font-bold text-4xl py-6'>Nossos Clientes Satisfeitos!</h2>
    <hr className='w-2/6 sm:w-1/12 border-2 mb-10 border-accentColor bg-accentColor'/>
    <Slider></Slider>
  </section>
  )
}

export default OurClients