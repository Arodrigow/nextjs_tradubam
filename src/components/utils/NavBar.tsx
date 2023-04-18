import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import {BsCaretDown} from 'react-icons/bs'

import logoBAM from './../../public/images/Logo_BAM.svg'
import QuoteButton from './QuoteButton'
import { useRouter } from 'next/router'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [clicked, setClicked] = useState(false);
    const { locale, locales, push } = useRouter()
    const [color, setColor] = useState('transparent');
    const [shadow, setShadow] = useState('none');

    const handleNav = () => {
        setNav(!nav)
    }

    const handleClickOutside = () => {
        setNav(!nav)
    }

    const handleLocaleClicked = () =>{
        setClicked(!clicked)
    }

    //const handleLocale = l => () => { }

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor("#000F23");
                setShadow("rgba(0, 0, 0, 0.40) 0px 3px 8px")

            } else {
                setColor("transparent");
                setShadow("none")
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])


    return (
        <div style={{ backgroundColor: `${color}`, boxShadow: `${shadow}` }} className='fixed top-0 left-0 w-full h-16 z-10 ease-in duration-300'>
            <div className='max-w-[1400px] m-auto flex justify-between p-2 text-white'>
                <Link href="/" className='flex justify-center items-center  w-max '>
                    <Image priority src={logoBAM} alt='BAM - Tradução e Consultoria em Línguas Estrangeiras' className='h-10 w-auto'></Image>
                </Link>
                <ul className='hidden lg:flex lg:justify-center lg:items-center'>
                    <li className='p-3 border-l-2 border-transparent hover:border-l-0 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                        <Link href='/'>Início</Link>
                    </li>
                    <li className='p-3 border-l-2 border-transparent hover:border-l-0 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                        <Link href='/'>Empresa</Link>
                    </li>
                    <li className='p-3 border-l-2 border-transparent hover:border-l-0 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                        <Link href='/'>Serviços</Link>
                    </li>
                    <li className='p-3 border-l-2 border-transparent hover:border-l-0 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                        <Link href='/'>Contato</Link>
                    </li>
                    <li className='p-3'>
                        <div className='group inline-block relative'>
                            <button className='inline-flex justify-center items-center'>{locale === 'pt-br' ? 'Português' : 'English'} <BsCaretDown className='pl-1 w-full h-full'></BsCaretDown></button>
                            
                            <ul className='absolute hidden group-hover:block bg-white pt-2 rounded-xl text-mainColor shadow-sm shadow-mainColor'>
                                {locales?.map(l => {
                                    return <li key={l} className=''>
                                        <Link href={'/'} className='block py-1 px-2'>{l === 'pt-br' ? 'Português' : 'English'}</Link>
                                    </li>
                                })}
                            </ul>
                        </div>

                    </li>
                    <li>
                        <QuoteButton></QuoteButton>
                    </li>
                </ul>

                <div className='flex items-center lg:hidden z-10'>
                    {nav ? <AiOutlineClose size={25} onClick={handleNav} /> : <AiOutlineMenu size={25} onClick={handleNav} />}
                </div>
                <div onClick={nav ? handleClickOutside : handleClickOutside} className={nav ? 'w-full h-screen absolute top-0 bottom-0 left-0 right-0 bg-black/60 z-[0]' : 'hidden'}></div>
                <div className={nav ? 'lg:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full sm:w-1/2 h-screen bg-mainColor text-center ease-in duration-300' : 'lg:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex justify-center items-center w-full sm:w-1/2 h-screen bg-mainColor text-center ease-in duration-300'}>
                    <ul >
                        <li className='p-4 text-xl hover:text-accentColor'>
                            <Link href='/'>Início</Link>
                        </li>
                        <li className='p-4 text-xl hover:text-accentColor'>
                            <Link href='/'>Empresa</Link>
                        </li>
                        <li className='p-4 text-xl hover:text-accentColor'>
                            <Link href='/'>Serviços</Link>
                        </li>
                        <li className='p-4 text-xl hover:text-accentColor'>
                            <Link href='/'>Contato</Link>
                        </li>
                        <li className='p-4 text-xl hover:text-accentColor'>
                        <div className='group inline-block relative'>
                            <button className='inline-flex justify-center items-center'>{locale === 'pt-br' ? 'Português' : 'English'} <BsCaretDown className='pl-1 w-full h-full'></BsCaretDown></button>
                            
                            <ul className='absolute hidden group-hover:block bg-white pt-2 rounded-xl text-mainColor shadow-sm shadow-mainColor'>
                                {locales?.map(l => {
                                    return <li key={l} className=''>
                                        <Link href={'/'} className='block py-1 px-2'>{l === 'pt-br' ? 'Português' : 'English'}</Link>
                                    </li>
                                })}
                            </ul>
                        </div>
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