import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowWork from '../components/HowWork'
import WhyNoxX from '../components/WhyNoxX'
import Try from '../components/Try'
import CTA from '../components/CTA'

const Home = () => {
  return (
   <main className='bg-gray-800'>
    <Hero/>
    <WhyNoxX/>
    <Features/>
    <HowWork/>
    <Try/>
    <CTA/>
   </main>
  )
}

export default Home