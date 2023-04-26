import { useTranslation } from 'next-i18next'
import React from 'react'

function AutoEstimate() {

  const { t: translation } = useTranslation('estimate')
  return (
    <section className='sm:w-[100%] md:w-[50%]'>
      <h3 className='text-2xl text-mainColor font-bold'>{translation("Peça um orçamento")}</h3>
      <h2 className='text-lg font-bold pb-10'>{translation("Automático!")}</h2>
      <form
        action="api/test"
        encType="multipart/form-data"
        method="post"
        className={'flex flex-col pl-6'}
      > 
        <input type="file" name="textFile" className='w-[80%]'/>
        <p className='mt-2 font-bold'>{translation("Ou")}</p>
        <label htmlFor="textContent" className={''}>
        </label>
        <textarea id="textContent" name="textContent" className='w-[80%] my-4 border-mainColor border-2 rounded-xl p-2 outline-accentColor' defaultValue={translation("Cole o texto nesta área")} rows={10} />
        <button type="submit" className={'w-[80%] bg-mainColor hover:bg-accentColor px-5 py-2 rounded-xl text-white font-bold'}>
          {translation("Calcular orçamento")}
        </button>
      </form>
    </section>
  )
}

export default AutoEstimate