import React from 'react'
import LearnMoreButton from '../utils/LearnMoreButton'

function OurServices() {
  return (
    <section className='flex justify-center items-center flex-col h-screen px-8'>
      <h2 className='text-mainColor font-bold text-4xl py-12'>Nossos Serviços</h2>
      <div className='block sm:grid sm:grid-cols-3 sm:gap-10'>
          <div className='row-span-2 rounded-2xl p-4 bg-mainColor '> 
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
          <div> Teste 2</div>
          <div> Teste 3</div>
          <div> Teste 4</div>
          <div> Teste 5</div>
      </div>
    </section>
  )
}

export default OurServices