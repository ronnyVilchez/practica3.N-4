import React from 'react'
import europa from '/images/destination/image-europa.png'
import { NavDest } from './NavDest'

export const Europa = () => {
    return (
        <section className='flex flex-row gap-8 w-full h-full mt-[6rem] px-[4rem]'>
            <figure className='flex justify-center items-center w-full'>
                <img src={europa} alt="europa" />
            </figure>

            <div className='flex flex-col w-full gap-4 px-[8rem]'>
                <NavDest/>
                <h1 className='text-[100px]'>EUROPA</h1>
                <p className='text-[15px] pb-8 border-b-[1px] border-white border-opacity-25'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                <div className="flex flex-row gap-8 pt-8 ">
                    <div className="flex flex-col gap-4">
                        <span className='text-[15px]'>AVG. DISTANCE</span>
                        <h2 className='text-[32px]'>628 mil. KM</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className='text-[15px]'>EST. TRAVEL TIME</span>
                        <h2 className='text-[32px]'>3 years</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
