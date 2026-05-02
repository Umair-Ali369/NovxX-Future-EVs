import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Dashboard = () => {
     const { user } = useContext(AuthContext)
  return (
    <div className='w-full px-10 h-screen m-auto flex justify-center items-center'>
        <h1 className='text-4xl font-bold'> Hi, Welcome {user ? <span className='text-blue-600'> {user?.name} </span>  : "to Auth System, Register or login to checkout"} </h1>
        </div>
  )
}

export default Dashboard