import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

import logoBAM from './../../public/images/Logo_BAM.svg'
import QuoteButton from './QuoteButton'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [shadow, setShadow] = useState('none');

    const handleNav = () =>{
        setNav(!nav)
    }

    useEffect(()=>{
        const changeColor = () =>{
            if(window.scrollY >= 90){
                setColor("#000F23");
                setShadow("rgba(0, 0, 0, 0.40) 0px 3px 8px")

            }else{                
                setColor("transparent");
                setShadow("none")
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])
  return (
    <div style={{backgroundColor: `${color}`, boxShadow: `${shadow}`}} className='fixed top-0 left-0 w-full h-21 z-10 ease-in duration-300'>
        <div className='max-w-[1400px] m-auto flex justify-between p-4 text-white'>
            <Link href="/" className='flex justify-center items-center  w-max'>
                <Image priority src={logoBAM} alt='BAM - Tradução e Consultoria em Línguas Estrangeiras' className='h-14 w-auto'></Image>
            </Link>
            <ul className='hidden sm:flex sm:justify-center sm:items-center'>
                <li className='p-3 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                    <Link href='/'>Início</Link>
                </li>                
                <li className='p-3 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                    <Link href='/'>Empresa</Link>
                </li>          
                <li className='p-3 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                    <Link href='/'>Serviços</Link>
                </li>
                <li className='p-3 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                    <Link href='/'>Contato</Link>
                </li>
                <li className='p-3 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                    <Link href='/'> LINGUA</Link>
                </li>
                <li>                                       
                    <QuoteButton></QuoteButton>
                </li>
            </ul>

        <div className='flex items-center sm:hidden z-10'>
            {nav ?  <AiOutlineClose size={25} onClick={handleNav} /> :  <AiOutlineMenu size={25}  onClick={handleNav}/>}
        </div>

        <div className={ nav ? 'sm:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full h-screen bg-mainColor text-center ease-in duration-300' : 'sm:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex justify-center items-center w-full h-screen bg-mainColor text-center ease-in duration-300'}>
            <ul >
                <li className='p-4 text-3xl hover:text-accentColor'>
                    <Link href='/'>Início</Link>
                </li>                
                <li className='p-4 text-3xl hover:text-accentColor'>
                    <Link href='/'>Empresa</Link>
                </li>          
                <li className='p-4 text-3xl hover:text-accentColor'>
                    <Link href='/'>Serviços</Link>
                </li>
                <li className='p-4 text-3xl hover:text-accentColor'>
                    <Link href='/'>Contato</Link>
                </li>
                <li className='p-4 text-3xl hover:text-accentColor'>
                    <Link href='/'> LINGUA</Link>
                </li>
                <li>                                       
                    <QuoteButton></QuoteButton>
                </li>
            </ul> 
        </div>
        </div>
    </div>
  )
}

export default NavBar