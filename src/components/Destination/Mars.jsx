import React from 'react'
import mars from '/images/destination/image-mars.png'
import { NavDest } from './NavDest'

export const Mars = () => {
    return (
        <section className='flex flex-row gap-8 w-full h-full mt-[6rem] px-[4rem]'>
            <figure className='flex justify-center items-center w-full'>
                <img src={mars} alt="mars"/>
            </figure>

            <div className='flex flex-col w-full gap-4 px-[8rem]'>
                <NavDest/>
                <h1 className='text-[100px]'>MARS</h1>
                <p className='text-[15px] pb-8 border-b-[1px] border-white border-opacity-25'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                <div className="flex flex-row gap-8 pt-8 ">
                    <div className="flex flex-col gap-4">
                        <span className='text-[15px]'>AVG. DISTANCE</span>
                        <h2 className='text-[32px]'>225 mil. KM</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className='text-[15px]'>EST. TRAVEL TIME</span>
                        <h2 className='text-[32px]'>9 months</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
