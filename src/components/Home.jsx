import React from 'react'

export const Home = () => {
  return (
    <section className={`flex flex-col w-full h-[78%]`} >
        <section className='flex flex-row mt-auto mb-[4rem] w-full px-[6rem] gap-[5rem]'>
          <div className='flex flex-col w-1/2 text-white'>
            <span className='text-[24px]'> So, you want to travel to </span>
            <h1 className='text-[154px]'>Space</h1>
            <p className='text-[16px]'>  Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!
            </p>
          </div>

          <div className='w-1/2 flex justify-center items-center'>
            <div className='bg-white rounded-full w-[270px] h-[270px] flex justify-center items-center'>
              <h2 className='text-[25px] font-semibold'>EXPLORE</h2>
            </div>
          </div>
        </section>

    </section>
  )
}
