import Image, { StaticImageData } from 'next/image';
import { BsChatLeftQuoteFill } from 'react-icons/bs'
import React from 'react'

interface props {
    client: {
        name: string,
        position: string;
        text: string;
        image: StaticImageData;
    }
}

function ClientAvaliation({ client }: props) {
    return (
        <div className='flex flex-col justify-between bg-mainColor rounded-2xl p-4 sm:p-12 h-[500px] sm:h-[400px] sm:w-[80%] text-sm text-center sm:text-base sm:shadow-lg sm:shadow-black'>
            <BsChatLeftQuoteFill className='fill-accentColor w-[40px] h-auto sm:w-[32px] sm:h-[32px]'></BsChatLeftQuoteFill>
            <br />
            <p className='text-white'>{client.text}</p>
            <br />
            <div className='flex justify-center sm:justify-end w-full'>
                <Image src={client.image} alt={'Image of our happy client'} className='w-[70px] h-auto row-span-2 rounded-full'></Image>
                <div className='flex flex-col justify-center pl-4'>
                    <p className='text-white'>{client.name}</p>
                    <p className='text-accentColor'>{client.position}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientAvaliation