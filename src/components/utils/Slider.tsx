import React, { useState } from 'react'
import ClientAvaliation from './ClientAvaliation'
import { Clients } from './data/ClientsData'
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowLeft } from 'react-icons/fa'

function Slider() {
    const [current, setCurrent] = useState(0)
    const length = Clients.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(Clients) || Clients.length <= 0) {
        return null
    }

    return (
        <div className='flex justify-center items-center max-w-[1240px] sm:mx-auto'>
        <div className='relative flex justify-center sm:p-4'>   
            {
                Clients.map((client, index) => (                     
                    <div key={index} className={index === current ? 'opacity-[1] ease-in duration-1000 flex justify-center items-center' : 'opacity-0'}>
                        <FaArrowCircleLeft onClick={prevSlide} size={30} className='absolute top-[101%] sm:top-[50%] left-[30px] cursor-pointer select-none z-[2] fill-accentColor'></FaArrowCircleLeft>
                        {index === current && (
                            <ClientAvaliation  client={client}></ClientAvaliation>
                        )}
                         <FaArrowCircleRight onClick={nextSlide} size={30} className='absolute top-[101%] sm:top-[50%] right-[30px] cursor-pointer select-none z-[2] fill-accentColor'></FaArrowCircleRight>
                    </div>                 
                ))
            }
            </div>  
        </div>
    )
}

export default Slider