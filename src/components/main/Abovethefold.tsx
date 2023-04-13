import React from 'react'
import QuoteButton from '../utils/QuoteButton'

function Abovethefold() {
  return (
  <div className='text-center sm:text-left flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-image'>
    <div className='absolute top-0 bottom-0 left-0 right-0 bg-mainColor/90 z-[2]'/>
    <div className='relative p-5 z-[2]'>
      <h2 className='pb-5 text-white text-5xl font-bold'>BAM!!</h2>
      <hr className='absolute left-[41%] sm:static sm:left-0 sm: w-2/12 border-2 ml-0 border-accentColor bg-accentColor'/>
       <p className='py-5 text-lg text-white font-light'>Clientes novos ganham presentes por aqui! <br />
        Por ser o seu primeiro trabalho conosco, ofertaremos um <br />
       super desconto de 20%!</p> 
      <QuoteButton></QuoteButton>
    </div>
  </div>
  )
}

export default Abovethefold