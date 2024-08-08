import React from 'react'
import { Link } from 'react-router-dom'

export const NavDest = () => {
    return (
        <nav className='flex flex-row gap-6 text-[20px]'>
            <button className='h-full '><Link className='w-full h-full hover:border-b-[2px] hover:border-white' to='/destination/Moon'>Moon</Link></button>
            <button className='h-full '><Link className='w-full h-full hover:border-b-[2px] hover:border-white' to='/destination/Mars'>Mars</Link></button>
            <button className='h-full '><Link className='w-full h-full hover:border-b-[2px] hover:border-white' to='/destination/Europa'>Europa</Link></button>
            <button className='h-full '><Link className='w-full h-full hover:border-b-[2px] hover:border-white' to='/destination/Titan'>Titan</Link></button>
        </nav>
    )
}
