import React from 'react'
import spaceport from '/images/technology/image-spaceport-portrait.jpg'
import { NavTec } from './NavTec'

export const Spaceport = () => {
    return (
        <section className='flex flex-row gap-8 w-full h-full mt-[6rem] pl-[4rem] justify-between'>
            <div className='flex flex-row w-[50%] gap-4 my-auto h-[80%] pl-[5rem] '>
                <div className='flex flex-col h-full mt-20'>
                    <NavTec />
                </div>
                <div className="flex flex-col h-full gap-4 mt-20">
                    <h2 className='text-[white] font-bellefair opacity-50 text-[25px]'>THE TERMINOLOGY...</h2>
                    <h1 className='text-[50px] font-bellefair'>SPACEPORT</h1>
                    <p className='text-[18px] text-[#D0D6F9] pb-8 '>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                </div>
            </div>

            <figure className='flex justify-end items-center w-fit h-[80%] '>
                <img src={spaceport} alt="spaceport" />
            </figure>

        </section>
    )
}
 