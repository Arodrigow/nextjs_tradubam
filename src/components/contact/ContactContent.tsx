import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'

import { AiFillInstagram, AiFillPhone, AiFillMail, AiFillEnvironment, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'

function ContactContent() {
    const { t: translation } = useTranslation('contact')
    return (
        <main className='min-h-[70vh] lg:min-h-[100vh] text-mainColor py-10 px-3 sm:px-28 flex flex-col justify-center items-center'>
            <h3 className='text-lg font-bold'>{translation("Entre Em Contato")}</h3>
            <h2 className='text-2xl pb-7 font-bold'>{translation("Detalhes")}</h2>
            <div className='block sm:grid sm:grid-cols-2 sm:gap-10'>
                <div className='flex pb-5'>
                    <AiFillPhone className='p-2  w-[48px] h-auto bg-mainColor rounded-full fill-white'></AiFillPhone>
                    <div className='flex flex-col ml-4'>
                        <p className='font-bold'>{translation("Telefone")}</p>
                        <Link href={'https://api.whatsapp.com/send?phone=5533988921316&text=Ol%C3%A1!%20Encontrei%20a%20BAM%20atrav%C3%A9s%20do%20seu%20site!'} className='text-accentColor' target='_blank' rel='noopener noreferrer'>+55 33 9 8892 1316</Link>
                    </div>
                </div>
                <div className='flex pb-5 flex-wrap'>
                    <AiFillMail className='p-2 w-[48px] h-auto bg-mainColor rounded-full fill-white'></AiFillMail>
                    <div className='flex flex-col ml-4'>
                        <p className='font-bold'>{translation("Email")}</p>
                        <Link href={'mailto:contato@tradubam.com'} className='text-accentColor' target='_blank' rel='noopener noreferrer'>contato@tradubam.com</Link>
                    </div>
                </div>
                <div className='flex col-span-2 pb-5'>
                    <AiFillEnvironment className='p-2 row-span-2 w-[48px] h-[48px] bg-mainColor rounded-full fill-white'></AiFillEnvironment>
                    <div className='flex flex-wrap ml-4 w-[200px] sm:w-[500px]'>
                        <p className='font-bold'>{translation("Endereço")}</p>
                        <p>{translation("Rua Rio Grande do Norte, Número 1435, Sala 708 PAVMTO7, Bairro / Distrito Savassi, Belo Horizonte - MG, CEP 30.130-138.")}</p>
                    </div>
                </div>
            </div>
            <h3 className='text-center text-lg font-bold pb-4'>{translation("Nos Mande Uma Mensagem!")}</h3>
            <div>
                <button className='m-2 bg-accentColor rounded-full w-[36px] sm:w-[50px] h-[36px] sm:h-[50px] hover:bg-mainColor/90'><Link href={'https://www.instagram.com/bamtraducoes/'} className='flex justify-center items-center' target='_blank' rel='noopener noreferrer'><AiFillInstagram  className='w-[24px] sm:w-[32px] h-auto fill-white'></AiFillInstagram></Link></button>
                <button className='m-2 bg-accentColor rounded-full w-[36px] sm:w-[50px] h-[36px] sm:h-[50px] hover:bg-mainColor/90'><Link href={'https://tradubam.com/contact/#'} className='flex justify-center items-center' target='_blank' rel='noopener noreferrer'><AiFillLinkedin  className='w-[24px] sm:w-[32px] h-auto fill-white'></AiFillLinkedin></Link></button>
                <button className='m-2 bg-accentColor rounded-full w-[36px] sm:w-[50px] h-[36px] sm:h-[50px] hover:bg-mainColor/90'><Link href={'mailto:contato@tradubam.com'} className='flex justify-center items-center' target='_blank' rel='noopener noreferrer'><AiFillMail  className='w-[24px] sm:w-[32px] h-auto fill-white'></AiFillMail></Link></button>
                <button className='m-2 bg-accentColor rounded-full w-[36px] sm:w-[50px] h-[36px] sm:h-[50px] hover:bg-mainColor/90'><Link href={'https://api.whatsapp.com/send?phone=5533988921316&text=Ol%C3%A1!%20Encontrei%20a%20BAM%20atrav%C3%A9s%20do%20seu%20site!'} className='flex justify-center items-center' target='_blank' rel='noopener noreferrer'><AiOutlineWhatsApp  className='w-[24px] sm:w-[32px] h-auto fill-white'></AiOutlineWhatsApp></Link></button>
            </div>
        </main>
    )
}

export default ContactContent