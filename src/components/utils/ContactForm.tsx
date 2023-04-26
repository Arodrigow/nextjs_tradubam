import { useTranslation } from 'next-i18next'
import React from 'react'

function ContactForm() {
  const {t:translation} = useTranslation('estimate');

    return (
    <section className='sm:w-[100%] md:w-[50%]'>   
    <h3 className='text-2xl text-mainColor font-bold pb-2'>{translation("Peça um orçamento")}</h3>
    <h2 className='text-lg font-bold'>{translation("Direto conosco!")}</h2>
      <form action="" className='flex flex-col pl-6'>
        <label htmlFor='name' className='mt-2 self-auto'>{translation("Nome")}</label>
        <input type="text" name="name" id="name" className='w-[80%] my-2 border-2 border-mainColor rounded-md outline-accentColor'/>
        <label htmlFor='email'>{translation("Email")}</label>
        <input type="text" name="email" id="email" className='w-[80%] my-2 border-2 border-mainColor rounded-md outline-accentColor'/>
        <label htmlFor='phone'>{translation("Telefone")}</label>
        <input type="text" name="phone" id="phone" className='w-[80%] my-2 border-2 border-mainColor rounded-md outline-accentColor'/>
        <label htmlFor="messageContent">
          {translation("Mensagem")}
        </label>
        <textarea id="messageContent" name="messageContent" className='w-[80%] my-4 border-mainColor border-2 rounded-xl p-2 outline-accentColor' rows={6} />
        <button type="submit" className={'w-[80%] bg-mainColor hover:bg-accentColor px-5 py-2 rounded-xl text-white font-bold'}>
          {translation("Enviar Mensagem")}
        </button>
      </form>
    </section>
  )
}

export default ContactForm