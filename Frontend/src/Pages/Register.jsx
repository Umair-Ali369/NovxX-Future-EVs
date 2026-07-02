import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register } = useAuth()
  const [form, setFrom] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  const token = localStorage.getItem("token")

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await register(form)
    if(success){
      setFrom({
        name : "",
        email : "",
        password : ""
      })

      navigate("/vehicle-setup")
    }
  }
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="font-bold text-3xl md:text-5xl text-white mb-6 text-center ">
          Register
        </h1>
        <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name..."
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            placeholder="Email..."
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            type="password"
            placeholder="Password..."
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition"
          >
            Register
          </button>
          <p className="text-gray-400 text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-400 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
