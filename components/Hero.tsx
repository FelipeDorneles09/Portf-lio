import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id='hero'>
    <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
    </div>
    <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
    </div>

    <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[65vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-max'>
                Felipe Dorneles de Carvalho • Engenheiro de Software Full Stack
            </h2>
            <TextGenerateEffect
             className='text-center text-[38px] md:text-5xl lg:text-6xl'
             words='Engenharia de Software de Alta Performance, da Interface ao Embarcado'
            />

            <p className='text-center md:tracking-wider mb-6 text-sm md:text-base lg:text-xl text-white-100 max-w-2xl'>
                Engenheiro de Software Full Stack com quase 3 anos de experiência em sistemas de missão crítica e telemetria na SkyDrones. Especialista em TypeScript, Next.js, Node.js e C++/Qt.
            </p>

            <div className='flex flex-wrap items-center justify-center gap-4'>
                <a href="#projects">
                    <MagicButton
                    title="Explorar Projetos"
                    icon={<FaLocationArrow />}
                    position='right'
                    />
                </a>
                <a href="#experience">
                    <MagicButton
                    title="Ver Trajetória"
                    icon={<FaLocationArrow />}
                    position='right'
                    otherClasses="!bg-[#0e1329]"
                    />
                </a>
            </div>
        </div>
    </div>

    </div> 
  )
}

export default Hero
