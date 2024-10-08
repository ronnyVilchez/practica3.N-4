import React from 'react'
import { Outlet} from 'react-router-dom'

export default function Crew() {
    return (
        <section className='text-white w-full h-[88%]'>
            <h2 className='text-[30px] flex px-[9rem] w-full uppercase font-thin h-[10%] py-[2rem]'>  02 Meet your crew</h2>
            <section className='flex h-[70%] '>      
                <Outlet />
            </section>

        </section>
    )
}
