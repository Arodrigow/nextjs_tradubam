import { useTranslation } from 'next-i18next'
import React from 'react'

function ContactForm() {
  const {t:translation} = useTranslation('estimate');

    return (
    <section className='sm:w-[100%] md:w-[50%] border-2 border-black'>   
    <h3 className='text-2xl text-mainColor font-bold'>{translation("Peça um orçamento")}</h3>
    <h2 className='text-lg font-bold'>{translation("Direto conosco!")}</h2>
      <form action="" className='flex flex-col'>
        <label htmlFor='name'>{translation("Nome")}</label>
        <input type="text" name="name" id="name" className='border-2 border-mainColor rounded-md'/>
        <label htmlFor='email'>{translation("Email")}</label>
        <input type="text" name="email" id="email" className='border-2 border-mainColor rounded-md'/>
        <label htmlFor='phone'>{translation("Telefone")}</label>
        <input type="text" name="phone" id="phone" className='border-2 border-mainColor rounded-md'/>
        <label htmlFor="messageContent">
          Paste the text on the area:
        </label>
        <textarea id="messageContent" name="messageContent" cols={55} rows={10} />
      </form>
    </section>
  )
}

export default ContactForm