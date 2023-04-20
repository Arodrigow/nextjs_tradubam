import React from 'react'

interface props {
    title:string,
    content: string
}

function AboutCard({title, content} : props) {
  return (
    <div className='flex flex-col justify-start items-start text-white bg-mainColor max-w-[90%] sm:max-w-[40%] sm:h-[250px] lg:h-[160px] p-4 mb-6 sm:mb-0 rounded-lg shadow-md shadow-black'>
        <h3 className='text-left text-lg font-bold pb-2'>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default AboutCard