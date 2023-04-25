import { useTranslation } from 'next-i18next'
import React from 'react'

function AutoEstimate() {

  const { t: translation } = useTranslation('estimate')
  return (
    <section className='sm:w-[100%] md:w-[50%] border-2 border-black'>
      <h3 className='text-2xl text-mainColor font-bold'>{translation("Peça um orçamento")}</h3>
      <h2 className='text-lg font-bold'>{translation("Automático!")}</h2>
      <form
        action="api/test"
        encType="multipart/form-data"
        method="post"
        className={'flex flex-col justify-center items-center'}
      >
        <input type="file" name="textFile" />
        <label htmlFor="textContent" className={''}>
          Paste the text on the area:
        </label>
        <textarea id="textContent" name="textContent" cols={55} rows={10} />
        <button type="submit" className={''}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default AutoEstimate