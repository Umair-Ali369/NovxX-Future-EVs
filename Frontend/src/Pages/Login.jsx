import React, { useContext, useState } from "react";
// import API from "../Api/axios";
// import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  // const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const res = await API.post("/user/login", form);
  //     login(res.data.token);
  //     toast.success("Login Successful");
  //     navigate("/profile");
  //   } catch (err) {
  //     toast.error("Invalid Credential. Please Register first")
  //   }
  // };
  return (
     <section className=" bg-gray-900 px-4  ">
      <div className="flex flex-col gap-4 justify-center items-center max-w-6xl mx-auto px-4 text-center py-24 pt-32">
           <h1 className="font-bold text-3xl md:text-5xl text-white ">
         Login
        </h1>
      <form
        method="post"
        className="p-5 m-5 w-auto md:w-[400px] lg:w-[500px] bg-slate-700 border-2 border-gray-300 rounded-md flex flex-col items-start gap-4 "
      >
        <input
          name="email"
          placeholder="Email..."
          className="px-6 py-3 bg-gray-200 rounded-md outline-none focus:ring-blue-600 w-full"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password..."
          className="px-6 py-3 bg-gray-200 rounded-md outline-none focus:ring-blue-600 w-full"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 w-full font-semibold text-white rounded-md "
        >
          Login
        </button>
      </form>
      </div>
    </section>
  );
};

export default Login;
