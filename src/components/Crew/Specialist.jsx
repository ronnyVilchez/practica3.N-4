import React from 'react'
import foto from '/images/crew/image-mark-shuttleworth.png'
import { NavCrew } from './NavCrew'

export const Specialist = () => {
    return (
        <section className='flex flex-row relative gap-8 w-full h-full mt-[6rem] px-[4rem]'>
            <div className='flex flex-col w-[50%] gap-4 my-auto pl-[5rem] pr-[2rem]'>
                <h2 className='text-[white] opacity-50 text-[25px]'>MISSION SPECIALIST </h2>
                <h1 className='text-[52px] font-bellefair'>MARK SHUTTLEWORTH </h1>
                <p className='text-[18px] text-[#D0D6F9] pb-8 '>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
           
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
