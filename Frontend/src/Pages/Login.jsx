import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const token = localStorage.getItem("token");
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
  
    setLoading(true);
    setError("");
    try {
      await login(form);
      setForm({ email: "", password: "" });
      navigate("/vehicle-setup"); // match AuthContext
    } catch (error) {
      setError(error?.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <section className="min-h-screen pb-10 pt-16 bg-[#091413] flex items-center justify-center px-4">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#44ACFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div>
        {/* Logo and Brand*/}
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="font-bold text-4xl text-[#E8EDEC] tracking-tight">
              NovxX{" "}
            </h1>
          </Link>
          <p className="text-gray-500 text-sm mt-1">
            {" "}
            Sign in to Your Account{" "}
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#0F1F1D] border w-[500px] border-white/10 rounded-2xl p-8">
          <h2 className="font-bold text-2xl text-[#E8EDEC] mb-6">
            Welcome Back
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400">Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] placeholder-gray-600 focus:outline-none focus:border-[#44ACFF]/50 transition-colors"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password..."
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] placeholder-gray-600 focus:outline-none focus:border-[#44ACFF]/50 transition-colors"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                <p className="text-red-400 text-sm"> {error} </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-[#44ACFF] text-[#091413] font-semibold hover:bg-[#5FB8FF] disabled:opacity-60 transition-colors mt-2 btn-press"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-[#091413]/30 border-t-[#091413] rounded-full animate-spin" />
                  Signing...
                </span>
              ) : (
                "Sign"
              )}
            </button>

            <p className="text-gray-400 text-sm text-center">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-blue-400 cursor-pointer hover:underline"
              >
                Register
              </span>
            </p>
          </form>

          {/* Back to home */}
          <p className="text-center mt-6">
            <Link
              to="/"
              className="text-gray-600 text-sm hover:text-gray-400 transition-colors"
            >
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
