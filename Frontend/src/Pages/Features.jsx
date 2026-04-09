import React from 'react'

const Features = () => {
  return (
      <section className=' bg-gray-900 px-4  '>
        <div className='flex flex-col justify-center items-center max-w-6xl mx-auto px-4 text-center py-24 pt-32'>
            <h1 className='font-bold text-3xl md:text-5xl text-white '>
               Explore TriVoltix Features
            </h1>
            <h4 className='text-lg text-gray-400  mt-4'>
                Powerful tools to designed to make EV usage smarter and more efficient
            </h4>
        </div>
        <div className=' flex flex-col gap-4 justify-center p-5 items-center'>
            <div className='grid grid-cols-1  gap-5'>
                <div className='px-8 py-5 border-2 border-[#44ACFF] rounded-md shadow-sm hover:scale-105 bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center'>
                    <h3 className='font-bold text-2xl text-[#44ACFF]'> Battery Intelligence </h3>
                    <p className='text-xl text-gray-400'> Monitor battery health, estimate range, and receive prediction to imporve performence </p>
                </div>
                <div className='p-6 border-2 border-[#44ACFF] rounded-md shadow-sm hover:scale-105 transition bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center'>
                    <h3 className='font-bold text-2xl  text-[#44ACFF]'> Charging Station Finder </h3>
                    <p className='text-xl text-gray-400'> Locate nearby EV charging station and plane your stops efficiency </p>
                </div>
                <div className='px-8 py-5 border-2 border-[#44ACFF] rounded-md shadow-sm hover:scale-105 transition bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center'>
                    <h3 className='font-bold text-2xl text-[#44ACFF] '> AI Assistant </h3>
                    <p className='text-xl text-gray-400'> Get perosonalized recommendation for your EV based on driving and battery data </p>
                </div>
                <div className='px-8 py-5 border-2 border-[#44ACFF] rounded-md shadow-sm hover:scale-105 transition bg-[#2C2C2C] flex flex-col justify-cneter items-center gap-4 text-center'>
                    <h3 className='font-bold text-2xl text-[#44ACFF] '> Smart Route Planning </h3>
                    <p className='text-xl text-gray-400'> Navigate efficiently with routes designed around battery level and charging points </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features