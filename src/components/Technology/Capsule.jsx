import React from 'react'
import capsule from '/images/technology/image-space-capsule-portrait.jpg'
import { NavTec } from './NavTec'

export const Capsule = () => {
    return (
        <section className='flex flex-row gap-8 w-full h-full mt-[6rem] pl-[4rem] justify-between'>
            <div className='flex flex-row w-[50%] gap-4 my-auto h-[80%] pl-[5rem] '>
                <div className='flex flex-col h-full mt-20'>
                    <NavTec />
                </div>
                <div className="flex flex-col h-full gap-4 mt-20">
                    <h2 className='text-[white] font-bellefair opacity-50 text-[25px]'>THE TERMINOLOGY...</h2>
                    <h1 className='text-[50px] font-bellefair'>SPACE CAPSULE</h1>
                    <p className='text-[18px] text-[#D0D6F9] pb-8 '>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                </div>
            </div>

            <figure className='flex justify-end items-center w-fit h-[80%] '>
                <img src={capsule} alt="capsule" />
            </figure>

        </section>
    )
}
 