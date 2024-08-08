import React from 'react'
import { Link } from 'react-router-dom'

export const NavTec = () => {
    return (
        <nav className='flex flex-col gap-6 pr-[2rem]'>
            <button className='rounded-full w-[5rem] h-[5rem] flex justify-center'><Link className=' text-white text-[3rem] hover:text-black hover:bg-white w-full h-full border-white border-[1px] rounded-full border-opacity-50 ' to='/technology/vehicle'>1</Link></button>

            <button className='rounded-full w-[5rem] h-[5rem] flex justify-center'><Link className=' text-white text-[3rem] hover:text-black hover:bg-white w-full h-full border-white border-[1px] rounded-full border-opacity-50 ' to='/technology/spaceport'>2</Link></button>

            <button className='rounded-full w-[5rem] h-[5rem] flex justify-center'><Link className=' text-white text-[3rem] hover:text-black hover:bg-white w-full h-full border-white border-[1px] rounded-full border-opacity-50 ' to='/technology/capsule'>3</Link></button>
        </nav>
    )
}
