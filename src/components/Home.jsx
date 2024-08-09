import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <section className={`flex flex-col w-full h-[78%]`} >
      <section className='flex flex-row mt-auto mb-[4rem] w-full px-[6rem] gap-[5rem]'>
        <div className='flex flex-col w-1/2 text-white'>
          <span className='text-[30px] text-[#D0D6F9] font-Barlow'> SO, YOU WANT TO TRAVEL TO </span>
          <h1 className='text-[154px] '>SPACE</h1>
          <p className='text-[20px] text-[#D0D6F9] font-Barlow'>  Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className='w-1/2 flex justify-center items-center'>
          <div className=" hover:bg-white hover:bg-opacity-10 relative rounded-full w-[400px] h-[400px] flex items-center justify-center ">
           <div className='bg-white rounded-full w-[270px] h-[270px]  flex '>
              <Link to={'/destination/moon'} className='text-[30px] text-[#0B0D17] w-full h-full flex justify-center items-center    '> EXPLORE </Link>
            </div>
            </div>
        </div>
      </section>

    </section>
  )
}
