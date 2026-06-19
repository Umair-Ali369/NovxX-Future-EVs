import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth()
   const token = localStorage.getItem('token')
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(form)
   if(success) {
     setForm({ email: "", password: "" });
   }
   if(token) {
    navigate('/dashboard')
   }
  }
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="font-bold text-3xl md:text-5xl text-white mb-6 text-center ">
          Login
        </h1>
        <form method="post" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email..."
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password..."
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition"
          >
            Login
          </button>
          <p className="text-gray-400 text-sm text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-400 cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
