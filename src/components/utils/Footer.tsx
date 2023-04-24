import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'

function Footer() {
  const { t:translation } = useTranslation(['all'])
  return (
    <div className='block md:flex md:justify-around sm:items-center w-full h-[75px] md:h-[50px] text-mainColor font-semibold md:font-bold bg-accentColor'>
      <div className=' flex justify-around items-center'>
        <ul className='px-0 sm:px-4'><Link href={'/'}>{translation("Início")}</Link></ul>
        <ul className='px-0 sm:px-4'><Link href={'/about'}>{translation("Empresa")}</Link></ul>
        <ul className='px-0 sm:px-4'><Link href={'/services'}>{translation("Serviços")}</Link></ul>
        <ul className='px-0 sm:px-4'><Link href={'/contact'}>{translation("Contato")}</Link></ul>
      </div>
      <div className='text-sm flex flex-col text-center pt-2 md:pt-0 md:flex-row'>
      <p >Copyright © 2023 BAM</p>
      <p className='hidden md:block md:px-4'> | </p>
      <p>{translation("Criado por")} <a href='https://andremaciel.dev.br/' target="_blank" rel="noopener noreferrer">André Maciel</a> </p>
      </div>
        
    </div>
  )
}

export default Footer