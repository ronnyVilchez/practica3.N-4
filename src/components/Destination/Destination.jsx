import React from 'react'
import { Outlet} from 'react-router-dom'

export default function Destination() {
    return (
        <section className='text-white w-full h-[78%]'>
            <h2 className='text-[30px] px-[10rem] w-full h-[10%] py-[2rem]'>  01 Pick your destination </h2>
            <section className='flex h-[68%]  '>
                
                <Outlet />
            </section>

        </section>
    )
}
