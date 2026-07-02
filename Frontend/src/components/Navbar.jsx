import React, { useState, useEffect, lazy } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";
import mylogo from "../assets/images/mylogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinkClass = (path) =>
    `text-sm font-medium transition-colors ${
      location.pathname === path
        ? "text-[#44ACFF]"
        : "text-gray-300 hover:text-[#E8EDEC]"
    }`;

  return (
    <nav>
      <div
        className={`hidden md:flex items-center justify-between py-3 px-8 bg-[#091413]/95 backdrop-blur-sm fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/10" : "border-b border-white/5"
        }`}
      >
        {/* Left — Logo */}
        <Link to="/">
          <img src={mylogo} alt="NovxX" className="h-24 w-auto object-contain" />
        </Link>

        {/* Center — Public pages (what NovxX is) */}
        <div className="flex items-center gap-8">
          <Link to="/features" className={navLinkClass("/features")}>
            Features
          </Link>
          <Link to="/concept" className={navLinkClass("/concept")}>
            About
          </Link>
          <Link to="/about" className={navLinkClass("/about")}>
            Features
          </Link>
        </div>

        {/* Right — App + Auth */}
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-[#44ACFF] text-[#091413] text-sm font-semibold hover:bg-[#5FB8FF] transition-colors"
              >
                Get Started
              </Link>
              <Link to="/login" className={navLinkClass("/login")}>
                Sign In
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className={navLinkClass("/dashboard")}>
                Dashboard
              </Link>
              <Link to="/calculator" className={navLinkClass("/calculator")}>
                Calculator
              </Link>
              {/* Divider */}
              <div className="w-px h-5 bg-white/10 mx-1" />

              <Link
                to="/profile"
                title={user?.name}
                className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold transition-colors ${
                  location.pathname === "/profile"
                    ? "bg-[#44ACFF]/25 border-[#44ACFF] text-[#44ACFF]"
                    : "bg-[#44ACFF]/10 border-[#44ACFF]/30 text-[#44ACFF] hover:bg-[#44ACFF]/25"
                }`}
              >
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </Link>
              <button
                onClick={logOut}
                className="px-3 py-1.5 rounded-lg border border-white/10 text-gray-400 text-sm font-medium hover:border-red-400/50 hover:text-red-400 transition-colors"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile NavBar */}
      <div className="md:hidden flex items-center justify-between py-3 px-4 bg-[#091413]/95 backdrop-blur-sm border-b border-white/5 fixed top-0 w-full z-50">
        <Link to="/">
          <img src={mylogo} alt="NovxX" className="h-16 w-auto object-contain" />
        </Link>

        <button
          className="text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
        </button>
      </div>

      {/* ── Mobile Dropdown ── */}
      {isOpen && (
        <div className="md:hidden fixed top-[53px] left-0 right-0 bg-[#0F1F1D] border-b border-white/10 z-40">
          <div className="flex flex-col p-4 gap-1">
            {/* pubic always visible */}
            <p className="text-gray-600 text-xs font-semibold tracking-widest uppercase px-2 pt-2 pb-1">
              Explore
            </p>

            {[
              { to: "/", label: "Home" },
              { to: "/features", label: "Features" },
              { to: "/concept", label: "Concept" },
              { to: "/about", label: "About" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`py-3 px-2 text-sm border-b border-white/5 transition-colors ${
                  location.pathname === to
                    ? "text-[#44ACFF]"
                    : "text-[#E8EDEC] hover:text-[#44ACFF]"
                }`}
              >
                {label}
              </Link>
            ))}

            {!user ? (
              <div>
                <Link
                  to="/register"
                  className="px-4 py-3 rounded-lg bg-[#44ACFF] text-[#091413] text-center font-semibold text-sm"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="px-4 py-3 rounded-lg border border-white/10 text-gray-300 text-center text-sm"
                >
                  Sign In
                </Link>
              </div>
            ) : (
              <>
                {/* App links — only when logged in */}
                <p className="text-gray-600 text-xs font-semibold tracking-widest uppercase px-2 pt-4 pb-1">
                  My Platform
                </p>

                {[
                  { to: "/calculator", label: "Calculator" },
                  { to: "/dashboard", label: "Dashboard" },
                  { to: "/profile", lable: "Profile" },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={`py-3 px-2 text-sm border-b border-white/5 transition-colors ${
                      location.pathname === to
                        ? "text-[#44ACFF]"
                        : "text-[#E8EDEC] hover:text-[#44ACFF]"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
                <button
                  onClick={logOut}
                  className="mt-4 px-4 py-3 rounded-lg border border-white/10 text-gray-400 text-sm font-medium text-center hover:border-red-400/50 hover:text-red-400 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
