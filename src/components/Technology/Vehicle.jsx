import React from 'react'
import vehicle from '/images/technology/image-launch-vehicle-portrait.jpg'
import { NavTec } from './NavTec'

export const Vehicle = () => {
    return (
        <section className='flex flex-row gap-8 w-full h-full mt-[6rem] pl-[4rem] justify-between'>
            <div className='flex flex-row w-[50%] gap-4 my-auto h-[80%] pl-[5rem] '>
                <div className='flex flex-col h-full mt-20'>
                    <NavTec />
                </div>
                <div className="flex flex-col h-full gap-4 mt-20">
                    <h2 className='text-[white] opacity-50 text-[25px]'>THE TERMINOLOGY...</h2>
                    <h1 className='text-[50px]'>LAUNCH VEHICLE</h1>
                    <p className='text-[14px] pb-8 '>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
            </div>

            <figure className='flex justify-end items-center w-fit h-[80%] '>
                <img src={vehicle} alt="vehicle" />
            </figure>

        </section>
    )
}
 