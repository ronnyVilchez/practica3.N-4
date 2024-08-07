import React from 'react'
import { Link } from 'react-router-dom'

export const NavCrew = () => {
    return (
        <nav className='flex flex-row gap-6 '>
            <button><Link className='text-[70px] hover:opacity-50' to='/crew/commander'>.</Link></button>
            <button><Link className='text-[70px] hover:opacity-50' to='/crew/specialist'>.</Link></button>
            <button><Link className='text-[70px] hover:opacity-50' to='/crew/pilot'>.</Link></button>
            <button><Link className='text-[70px] hover:opacity-50' to='/crew/engineer'>.</Link></button>
        </nav>
    )
}
