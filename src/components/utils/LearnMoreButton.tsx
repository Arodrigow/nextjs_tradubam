import Link from 'next/link'
import React from 'react'

function LearnMoreButton({to}) {

  return (
    <Link href={to}>
         <button className='border border-transparent py-2 px-5 bg-accentColor rounded-full text-base text-white font-bold'>Saiba mais</button>
    </Link>
    
  )
}

export default LearnMoreButton