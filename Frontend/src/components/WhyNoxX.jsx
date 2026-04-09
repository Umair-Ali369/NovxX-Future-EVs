import React from 'react'

const WhyNoxX = () => {
  return (
   <section className=' flex flex-col gap-4 justify-center p-5 items-center md:py-20 sm:py-16 py-12'>
        <h2 className='font-bold text-3xl md:text-6xl my-5 text-white text-center'> Why NovxX? </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl'>
            <div  className='px-8 py-5 border-2 border-[#44ACFF] rounded-md shadow-sm hover:shadow-lg bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-2 text-center'>
                <h3 className='font-bold text-2xl  text-[#44ACFF]'> 1. Smart EV Insights </h3>
                <p className='text-xl text-gray-400'>Delivers actionable guidance, businesses, make informed electric vehicle decisions, performance, efficiency, and value </p>
            </div>
            <div className='px-8 py-5 border-2 border-[#44ACFF] rounded-md shadow-sm hover:shadow-lg bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-2 text-center'>
                <h3 className='font-bold text-2xl  text-[#44ACFF]'> 2. Analyze Data </h3>
                <p className='text-xl text-gray-400'>We provide data driven analysis and Electric Vehicle datasets to identify key trends, usage behaviors, and performance outcomes </p>
            </div>
            <div className='px-8 py-5 border-2 border-[#44ACFF] rounded-md shadow-sm hover:shadow-lg bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-2 text-center'>
                <h3 className='font-bold text-2xl  text-[#44ACFF]'> 3.AI-Powered Optimization </h3>
                <p className='text-xl text-gray-400'> Algorithms to optimize EV Charging, balance energy & enhance battery performance making Electric Vehicle faster, smarter and more sustainable </p>
            </div>
        </div>
    </section>
  )
}

export default WhyNoxX