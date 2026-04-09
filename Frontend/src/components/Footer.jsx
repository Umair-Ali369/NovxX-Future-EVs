import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#091413] p-5 flex flex-col justify-center items-center'>
        <p className='text-white'> Building the future of EVs </p>
        <p className='text-white'> &copy; {new Date().getFullYear()} Electric Vehicles </p>

    </footer>
  )
}

export default Footer