import React from 'react'
import foto from '/images/crew/image-victor-glover.png'
import { NavCrew } from './NavCrew'

export const Pilot = () => {
    return (
        <section className='flex flex-row gap-8 w-full h-full mt-[6rem] px-[4rem]'>
            <div className='flex flex-col w-[50%] gap-4 my-auto pl-[5rem] pr-[2rem]'>
                <h2 className='text-[white] opacity-50 text-[25px]'>PILOT</h2>
                <h1 className='text-[55px]'>VICTOR GLOVER</h1>
                <p className='text-[14px] pb-8 '>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                <div className='flex flex-col h-full mt-20'>
                    <NavCrew />
                </div>

            </div>

            <figure className='flex justify-center items-center w-[35%] '>
                <img src={foto} alt="crew" />
            </figure>
         
        </section>
    )
}
