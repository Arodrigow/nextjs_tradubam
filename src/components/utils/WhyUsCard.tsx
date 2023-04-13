import React from 'react'

interface props{
    title: JSX.Element;
    description: string;
    image: JSX.Element
}

function WhyUsCard({title, description, image}: props) {
  return (
    <div className='bg-white flex flex-col justify-start items-center p-12 my-8 rounded-2xl shadow-lg shadow-accentColor/50'>
        {image}
        <br />
        {title}
        <br />
        <p className='text-mainColor text-justify lg:text-left'>{description}</p>
    </div>
  )
}

export default WhyUsCard