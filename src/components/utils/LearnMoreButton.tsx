import Link from 'next/link'
import React from 'react'

interface props{
  to: string
}

function LearnMoreButton({to}:props) {

  return (
    <Link href={to}>
         <button className='border border-transparent py-2 px-5 bg-accentColor rounded-full text-base text-white font-bold'>Saiba mais</button>
    </Link>
    
  )
}

export default LearnMoreButton