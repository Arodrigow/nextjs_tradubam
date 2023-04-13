import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='block md:flex md:justify-around sm:items-center w-full h-[75px] md:h-[50px] text-mainColor font-semibold md:font-bold bg-accentColor'>
      <div className=' flex justify-around items-center'>
        <ul className='px-0 sm:px-4'><Link href={'/'}>Início</Link></ul>
        <ul className='px-0 sm:px-4'><Link href={'/'}>Empresa</Link></ul>
        <ul className='px-0 sm:px-4'><Link href={'/'}>Serviços</Link></ul>
        <ul className='px-0 sm:px-4'><Link href={'/'}>Contato</Link></ul>
      </div>
      <div className='text-sm flex flex-col text-center pt-2 md:pt-0 md:flex-row'>
      <p >Copyright © 2023 BAM</p>
      <p className='hidden md:block md:px-4'> | </p>
      <p>Created by <a href='https://andremaciel.dev.br/' target="_blank" rel="noopener noreferrer">André Maciel</a> </p>
      </div>
        
    </div>
  )
}

export default Footer