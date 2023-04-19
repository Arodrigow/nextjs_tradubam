import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsCaretDown } from 'react-icons/bs'

import logoBAM from './../../public/images/Logo_BAM.svg'
import { Flags } from './data/Flags'
import QuoteButton from './QuoteButton'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const {locale, locales } = useRouter()
    const [color, setColor] = useState('transparent');
    const [shadow, setShadow] = useState('none');

    const { t:translation } = useTranslation(['all'])

    const handleNav = () => {
        setNav(!nav)
    }

    const handleClickOutside = () => {
        setNav(!nav)
    }

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
                        <Link href='/'>{translation('Início')}</Link>
                    </li>
                    <li className='p-3 border-l-2 border-transparent hover:border-l-0 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                        <Link href='/'>{translation("Empresa")}</Link>
                    </li>
                    <li className='p-3 border-l-2 border-transparent hover:border-l-0 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                        <Link href='/'>{translation("Serviços")}</Link>
                    </li>
                    <li className='p-3 border-l-2 border-transparent hover:border-l-0 hover:border-accentColor hover:border-r-2 hover:border-b-2'>
                        <Link href='/'>{translation("Contato")}</Link>
                    </li>
                    <li className='p-3'>
                        <div className='group inline-block relative'>
                            <button className='inline-flex justify-center items-center'>
                            <Image src={locale === 'pt' ? Flags[0].source : Flags[1].source} alt={locale === 'pt' ? 'Flag of Brazil' : 'USA flag'} className='w-5'></Image>
                               <p className='pl-1'> {locale === 'pt' ? 'Português' : 'English'} </p><BsCaretDown className='pl-1 w-full h-full'></BsCaretDown></button>

                            <ul className='absolute hidden group-hover:block bg-white rounded-xl text-mainColor shadow-sm shadow-mainColor drop-shadow-sm w-[175px]'>
                                {locales?.map((l, index) => {
                                    return <li key={l} className='rounded-sm hover:bg-mainColor/30'>
                                        <Link href={'/'} locale={l} className='flex justify-start items-center py-3 px-5'>
                                            <Image src={Flags[index].source} alt={l === 'pt' ? 'Flag of Brazil' : 'USA flag'} className='w-10'></Image>
                                            <p className='pl-2'>
                                                {Flags[index].name}
                                            </p></Link>
                                    </li>
                                })}
                            </ul>
                        </div>

                    </li>
                    <li>
                        <QuoteButton title={translation('Pedir orçamento')}></QuoteButton>
                    </li>
                </ul>

                <div className='flex items-center lg:hidden z-10'>
                    {nav ? <AiOutlineClose size={25} onClick={handleNav} /> : <AiOutlineMenu size={25} onClick={handleNav} />}
                </div>
                <div onClick={nav ? handleClickOutside : handleClickOutside} className={nav ? 'w-full h-screen absolute top-0 bottom-0 left-0 right-0 bg-black/60 z-[0] lg:hidden' : 'hidden'}></div>
                <div className={nav ? 'lg:hidden absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center w-full sm:w-1/2 h-screen bg-mainColor text-center ease-in duration-300' : 'lg:hidden absolute top-0 bottom-0 left-[-100%] right-0 flex justify-center items-center w-full sm:w-1/2 h-screen bg-mainColor text-center ease-in duration-300'}>
                    <ul >
                        <li className='p-4 text-xl hover:text-accentColor'>
                            <Link href='/'>{translation("Início")}</Link>
                        </li>
                        <li className='p-4 text-xl hover:text-accentColor'>
                            <Link href='/'>{translation("Empresa")}</Link>
                        </li>
                        <li className='p-4 text-xl hover:text-accentColor'>
                            <Link href='/'>{translation("Serviços")}</Link>
                        </li>
                        <li className='p-4 text-xl hover:text-accentColor'>
                            <Link href='/'>{translation("Contato")}</Link>
                        </li>
                        <li className='p-4 text-xl hover:text-accentColor'>
                        <div className='group inline-block relative'>
                        <button className='inline-flex justify-center items-center'>
                            <Image src={locale === 'pt' ? Flags[0].source : Flags[1].source} alt={locale === 'pt' ? 'Flag of Brazil' : 'USA flag'} className='w-5'></Image>
                               <p className='pl-1'> {locale === 'pt' ? 'Português' : 'English'} </p><BsCaretDown className='pl-1 w-full h-full'></BsCaretDown></button>
                            <ul className='absolute hidden group-hover:block bg-white rounded-xl text-mainColor shadow-sm shadow-mainColor text-sm sm:text-base w-[175px]'>
                                {locales?.map((l, index) => {
                                    return <li key={l} className=' hover:bg-mainColor/30'>
                                        <Link href={'/'} locale={l} className='flex justify-start items-center py-3 px-5'>
                                            <Image src={Flags[index].source} alt={l === 'pt' ? 'Flag of Brazil' : 'USA flag'} className='w-10'></Image>
                                            <p className='pl-2'>
                                                {Flags[index].name}
                                            </p></Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                        </li>
                        <li>
                            <QuoteButton title={translation('Pedir orçamento')}></QuoteButton>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar