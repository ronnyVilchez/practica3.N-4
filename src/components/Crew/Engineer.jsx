import React from 'react'
import foto from '/images/crew/image-anousheh-ansari.png'
import { NavCrew } from './NavCrew'

export const Engineer = () => {
    return (
        <section className='flex flex-row relative gap-8 w-full h-full mt-[6rem] px-[4rem]'>
            <div className='flex flex-col  w-[50%] gap-4 my-auto pl-[5rem] pr-[2rem]'>
                <h2 className='text-[white] opacity-50 text-[25px]'>FLIGHT ENGINNER</h2>
                <h1 className='text-[50px]'>ANOUSHEH ANSARI</h1>
                <p className='text-[14px] pb-8 '>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>


            </div>

            <figure className='flex justify-center items-center w-[35%] '>
                <img src={foto} alt="crew" />
            </figure>
            <div className='flex flex-col absolute top-[80%] left-[11%] h-fit '>
                <NavCrew />
            </div>
        </section>
    )
}
