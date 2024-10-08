import React from 'react'
import foto from '/images/crew/image-douglas-hurley.png'
import { NavCrew } from './NavCrew'

export const Commander = () => {
    return (
        <section className='flex flex-row relative gap-8 w-full h-full mt-[6rem] px-[4rem]'>
            <div className='flex flex-col w-[50%] gap-4 my-auto pl-[5rem] pr-[2rem]'>
                <h2 className='text-[white] opacity-50 text-[25px]'>COMMANDER</h2>
                <h1 className='text-[52px] font-bellefair'>DOUGLAS HURLEY</h1>
                <p className='text-[18px] text-[#D0D6F9] pb-8 '>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
               
            </div>

            <figure className='flex justify-center items-center w-[35%] '>
                <img src={foto} alt="crew" />
            </figure>
            <div className='flex flex-col absolute top-[80%] left-[11%] h-fit '>
                <NavCrew />
            </div>
        </section>
    )
}
