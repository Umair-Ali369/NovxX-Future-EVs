import React from 'react'

const Hero = () => {
  return (
    <section className='relative h-screen w-full flex items-center justify-center '>

<div className=' bg-center absolute inset-0 z-10 bg-[url("https://static.vecteezy.com/system/resources/thumbnails/025/321/349/small_2x/modern-and-sport-car-with-fuel-gun-generative-ai-photo.jpg")] bg-cover opacity-20'></div>
        <div className='relative z-10 flex flex-col justify-center items-center max-w-6xl mx-auto px-4 text-center'>
            <h1 className='font-bold text-3xl md:text-5xl text-white '>
                Intelligence EV Platform for Smarter Mobility
            </h1>
            <h4 className='text-lg text-gray-300  mt-4'>
                Optimize battery performence, discover charging stations, and make data driven decision for your Electric Vehicle
            </h4>
            <strong className='text-white  text-lg font-semibold'> Build for the future of EV systems in emerging market </strong>
            <div className='flex flex-col sm:flex-row gap-4  mt-4'>
                <button className='px-5 py-3 rounded-md bg-blue-500 text-white font-semibold '> Get Started </button>
                <button className='px-5 py-3 rounded-md border-2 border-blue-400 text-white font-semibold '> Explore Features </button>
            </div>
        </div>
    </section>
  )
}

export default Hero