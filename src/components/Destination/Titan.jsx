import React from 'react'
import titan from '/images/destination/image-titan.png'
import { NavDest } from './NavDest'

export const Titan = () => {
    return (
        <section className='flex flex-row gap-8 w-full h-full mt-[6rem] px-[4rem]'>
            <figure className='flex justify-center items-center w-full'>
                <img src={titan} alt="titan" />
            </figure>

            <div className='flex flex-col w-full gap-4 px-[8rem]'>
                <NavDest/>
                <h1 className='text-[100px]'>TITAN</h1>
                <p className='text-[18px] text-[#D0D6F9] pb-8 border-b-[1px] border-white border-opacity-25'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                <div className="flex flex-row gap-8 pt-8 ">
                    <div className="flex flex-col gap-4">
                        <span className='text-[18px] text-[#D0D6F9]'>AVG. DISTANCE</span>
                        <h2 className='text-[32px]'>1.6 bil. KM</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className='text-[18px] text-[#D0D6F9]'>EST. TRAVEL TIME</span>
                        <h2 className='text-[32px]'>7 years</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
