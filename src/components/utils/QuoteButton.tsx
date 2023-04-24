import Link from 'next/link'
import React from 'react'

interface props {
  title:string
}
function QuoteButton({title}:props) {
  return (
    <button className='w-[175px] p-2 border border-transparent bg-accentColor rounded-full text-sm text-white font-bold'><Link href={"/estimate"}>{title}</Link></button>
  )
}

export default QuoteButton