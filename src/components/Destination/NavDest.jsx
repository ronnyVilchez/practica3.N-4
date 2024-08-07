import React from 'react'
import { Link } from 'react-router-dom'

export const NavDest = () => {
    return (
        <nav className='flex flex-row gap-6 text-[20px] '>
            <button><Link to='/destination/Moon'>Moon</Link></button>
            <button><Link to='/destination/Mars'>Mars</Link></button>
            <button><Link to='/destination/Europa'>Europa</Link></button>
            <button><Link to='/destination/Titan'>Titan</Link></button>
        </nav>
    )
}
