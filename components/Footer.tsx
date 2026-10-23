import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10' id="contact">

        <div className='flex flex-col items-center text-center'>
            <h1 className='heading lg:max-w-[50vw]'>
                Pronto para impulsionar <span className='text-purple'>seus sistemas</span> com engenharia de alto nível?
            </h1>
            <p className='text-white-200 md:mt-6 my-4 max-w-xl'>
                Fale comigo para discutirmos novos projetos, arquitetura de software, automações ou oportunidades na sua equipe.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mb-4'>
                <a href="mailto:fdorneles63@gmail.com">
                    <MagicButton 
                    title="Entrar em contato"
                    icon={<FaLocationArrow />}
                    position='right'
                    />
                </a>
            </div>
            <p className='text-xs text-white-100/60 mt-1'>
                Canoas, RS • +55 (51) 99687-3989 • fdorneles63@gmail.com
            </p>
        </div>

        <div className='flex mt-14 md:flex-row flex-col justify-between items-center gap-4'>
            <p className='md:text-base text-sm md:font-normal font-light text-white-100'>
                Copyright © 2026 Felipe Dorneles de Carvalho. Todos os direitos reservados.
            </p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a 
                        href={profile.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        key={profile.id} 
                        aria-label={`Link para ${profile.link}`}
                        className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-110 transition-transform'
                    >
                        <img 
                        src={profile.img}
                        width={20}
                        height={20}
                        alt="social icon"
                        />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer