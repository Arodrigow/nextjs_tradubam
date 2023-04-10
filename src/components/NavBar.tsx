import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () =>{
        setNav(!nav)
    }

    useEffect(()=>{
        const changeColor = () =>{
            if(window.scrollY >= 90){
                setColor("white");
                setTextColor("#E05414");
            }else{                
                setColor("transparent");
                setTextColor("white");
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])
  return (
    <div style={{backgroundColor: `${color}`}} className='fixed top-0 left-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1250px] m-auto flex justify-between p-4 text-white'>
            <Link href="/">
                <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>BAM</h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
                <li className='p-4 hover:text-accentColor hover:border-r-[1px] hover:border-b-[1px]'>
                    <Link href='/'>Início</Link>
                </li>                
                <li className='p-4 hover:text-accentColor hover:border-r-[1px] hover:border-b-[1px]'>
                    <Link href='/'>Empresa</Link>
                </li>          
                <li className='p-4 hover:text-accentColor hover:border-r-[1px] hover:border-b-[1px]'>
                    <Link href='/'>Serviços</Link>
                </li>
                <li className='p-4 hover:text-accentColor hover:border-r-[1px] hover:border-b-[1px]'>
                    <Link href='/'>Contato</Link>
                </li>
                <li className='p-4 hover:text-accentColor hover:border-r-[1px] hover:border-b-[1px]'>
                    <Link href='/'> LINGUA</Link>
                </li>
            </ul>

        <div className='block sm:hidden z-10'>
            {nav ?  <AiOutlineClose size={25} onClick={handleNav} /> :  <AiOutlineMenu size={25}  onClick={handleNav} style={{color: `${textColor}`}}/>}
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
            </ul> 
        </div>
        </div>
    </div>
  )
}

export default NavBar