import React from 'react'
import moon from '/images/destination/image-moon.png'
import { NavDest } from './NavDest'

export const Moon = () => {
    return (
        <section className='flex flex-row gap-8 w-full h-full mt-[6rem] px-[4rem]'>
            <figure className='flex justify-center items-center w-full'>
                <img src={moon} alt="moon" />
            </figure>

            <div className='flex flex-col w-full gap-4 px-[8rem]'>
                <NavDest/>
                <h1 className='text-[100px]'>MOON</h1>
                <p className='text-[18px] text-[#D0D6F9] pb-8 border-b-[1px] border-white border-opacity-25'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div className="flex flex-row gap-8 pt-8 ">
                    <div className="flex flex-col gap-4">
                        <span className='text-[18px] text-[#D0D6F9]'>AVG. DISTANCE</span>
                        <h2 className='text-[32px]'>384,400 KM</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className='text-[18px] text-[#D0D6F9]'>EST. TRAVEL TIME</span>
                        <h2 className='text-[32px]'>3 DAYS</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
