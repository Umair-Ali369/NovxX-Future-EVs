import { useState } from 'react'
// import API from '../Api/axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
    const [form , setFrom] = useState({
        name : "",
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        setFrom({...form, [e.target.name] : e.target.value})
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     await API.post('/user/register', form)
    //    toast.success('Register Successfully')
    //    navigate('/login')
       
    // }
  return (
     <section className=" bg-gray-900 px-4  ">
      <div className="flex flex-col gap-4 justify-center items-center max-w-6xl mx-auto px-4 text-center py-24 pt-32">
           <h1 className="font-bold text-3xl md:text-5xl text-white ">
      Register
        </h1>
   <form className="p-5 m-5 w-auto md:w-[400px] lg:w-[500px] bg-slate-700 border-2 border-gray-300 rounded-md flex flex-col items-start gap-4 ">
    <input  name='name' placeholder='Name...' onChange={handleChange} className='px-6 py-3 bg-gray-200 rounded-md outline-none focus:ring-blue-600 w-full'   />
    <input name='email' placeholder='Email...' onChange={handleChange} className='px-6 py-3 bg-gray-200 rounded-md outline-none focus:ring-blue-600 w-full'  />
    <input name='password' type='password' placeholder='Password...' onChange={handleChange} className='px-6 py-3 bg-gray-200 rounded-md outline-none focus:ring-blue-600 w-full'   />
    <button type='submit' className='bg-blue-500 px-4 py-2 w-full font-semibold text-white rounded-md '>Register</button>
   </form>
   </div>
    </section>
  )
}

export default Register