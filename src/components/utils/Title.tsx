import { useTranslation } from 'next-i18next'
import React from 'react'

interface props {
    title: string,
    subtitle:string
}

function Title({title, subtitle}: props) {
    return (
        <div className='flex flex-col justify-end lg:pl-20 text-white font-bold h-[40vh] lg:h-[70vh] bg-mainColor'>
            <h2 className='text-base text-center lg:text-left pb-2'>{subtitle}</h2>
            <h1 className='text-5xl text-center lg:text-left md:text-7xl pb-12'>{title}</h1>
        </div>
    )
}

export default Title