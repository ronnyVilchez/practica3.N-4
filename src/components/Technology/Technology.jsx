import React from 'react'
import { Outlet} from 'react-router-dom'

export default function Technology() {
    return (
        <section className='text-white w-full h-[88%]'>
            <h2 className='text-[30px] flex px-[9rem] uppercase font-thin w-full h-[10%] py-[2rem]'> 03 Space launch 101</h2>
            <section className='flex h-[70%] '>      
                <Outlet />
            </section>
        </section>
    )
}
