import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await register(form);
      setForm({ name: "", email: "", password: "" });
      navigate("/login");
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Registration failed. Please try again",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-screen pb-10 pt-16 lg:pt-32 bg-[rgb(9,20,19)] flex items-center justify-center px-4">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2  w-[500px] h-[500px] bg-[#44ACFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div>
        {/* Logo and Brand*/}
        <div className="text-center mb-6">
          <Link to="/" className="inline-block">
            <h1 className="font-bold text-4xl text-[#E8EDEC] tracking-tight">
              NovxX{" "}
            </h1>
          </Link>
          <p className="text-gray-500 text-sm mt-1"> Create Your Account </p>
        </div>

        {/* Card */}
        <div className="bg-[#0F1F1D] border w-auto md:w-[500px] border-white/10 rounded-2xl p-8">
          <h2 className="font-bold text-2xl text-[#E8EDEC] mb-6">
            Get Started
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-400">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name..."
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#091413] border border-white/10 text-[#E8EDEC] placeholder-gray-600 focus:outline-none focus:border-[#44ACFF]/50 transition-colors"
              />
            </div>

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
                placeholder="Min. 6 characters"
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
                  Creating account...
                </span>
              ) : (
                "Create Account"
              )}
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
      </div>
    </section>
  );
};

export default Register;
