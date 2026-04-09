import React from 'react'

const HowWork = () => {
  return (
    <section className=' flex flex-col gap-4 justify-center p-5 items-center md:py-20 sm:py-16 py-12'>
        <h2 className='font-bold text-3xl md:text-6xl my-5 text-white text-center'> How NovxX Works? </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl'>
            <div  className='px-8 py-5 border-2 border-[#44ACFF] rounded-md shadow-sm hover:shadow-lg bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-2 text-center'>
                <h3 className='font-bold text-2xl  text-[#44ACFF]'> 1. Connect Your EV </h3>
                <p className='text-xl text-gray-400'> Input your vehicle detials and battery status </p>
            </div>
            <div className='px-8 py-5 border-2 border-[#44ACFF] rounded-md shadow-sm hover:shadow-lg bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-2 text-center'>
                <h3 className='font-bold text-2xl  text-[#44ACFF]'> 2. Analyze Data </h3>
                <p className='text-xl text-gray-400'> Our system processess your EV data and predict performence </p>
            </div>
            <div className='px-8 py-5 border-2 border-[#44ACFF] rounded-md shadow-sm hover:shadow-lg bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-2 text-center'>
                <h3 className='font-bold text-2xl  text-[#44ACFF]'> 3. Get Smart Results </h3>
                <p className='text-xl text-gray-400'> Receive charging suggestion and optimized routes</p>
            </div>
        </div>
    </section>
  )
}

export default HowWork