import Link from 'next/link'
import React from 'react'

interface props{
    serviceName: string,
    serviceDescription: string,
    serviceIcon: JSX.Element
}

function MainServiceCard({serviceName, serviceDescription, serviceIcon}: props) {
    
    return (
    <div className='pb-10'>
        <div className='flex items-center justify-between'>
        <h3 className='font-bold text-2xl'>
         {serviceName}
        </h3>
        {serviceIcon}</div>
        <br />
        <p className='text-justify sm:text-left'>{serviceDescription} <Link href={"/services"} className='text-accentColor font-bold'>Saiba mais.</Link></p>
    </div>        
  )
}

export default MainServiceCard