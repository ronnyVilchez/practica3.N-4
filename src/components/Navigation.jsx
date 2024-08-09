import React from 'react'
import { Link } from 'react-router-dom'
import icon from '/images/shared/logo.svg';

export const Navigation = () => {
  return (
    <nav className='w-full h-[12%] font-Barlow  flex flex-row justify-between items-center px-8 pt-8'>
        <img src={icon} alt="logo" />
        <section className='flex flex-row h-full gap-8 text-white font-bold bg-[#D0D6F9] bg-opacity-15 backdrop-blur w-1/2 justify-evenly '>
            <button ><Link className='inline-block h-full place-content-center text-[16px] font-normal hover:border-white hover:border-b-[4px]  focus:border-white focus:border-b-[4px]' to='/home'><span className='font-semibold'>00</span> HOME</Link></button>

            <button ><Link className='inline-block h-full place-content-center text-[16px] font-normal hover:border-white hover:border-b-[4px]  focus:border-white focus:border-b-[4px]' to='/destination/moon'><span className='font-semibold'>01</span> DESTINATION</Link></button>

            <button ><Link className='inline-block h-full place-content-center text-[16px] font-normal hover:border-white hover:border-b-[4px]  focus:border-white focus:border-b-[4px]' to='/crew/commander'><span className='font-semibold'>02</span> CREW</Link></button>

            <button ><Link className='inline-block h-full place-content-center text-[16px] font-normal hover:border-white hover:border-b-[4px]  focus:border-white focus:border-b-[4px]' to='/technology/vehicle'><span className='font-semibold'>03</span> TECHNOLOGY</Link></button>
        </section>
    </nav>
  )
}
