import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id="contact">

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Pronto para levar <span className='text-purple'>seus</span> projetos para o proximo nível?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Fale comigo hoje para que eu possa ajudar você a atingir suas metas</p>
            <a href="mailto:felipedorneles63@gmail.com">
                <MagicButton 
                title="Fale comigo"
                icon={<FaLocationArrow />}
                position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Felipe Dorneles de Carvalho</p>

            <div className='flex items-center md:gap-3 gap-6 mt-[10px] md:mt-0'>
    {socialMedia.map((profile) => (
        <a 
            href={profile.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={profile.id} 
            className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
        >
            <img 
            src={profile.img}
            width={20}
            height={20}
            />
        </a>
    ))}
</div>

        </div>
    </footer>
  )
}

export default Footer