import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
const Features = lazy(() => import("./Pages/Features"));
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster  } from "react-hot-toast";
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Calculator = lazy(() => import("./Pages/Calculator"));
const Stations = lazy(() => import("./Pages/Stations"));
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
import ProtectedRoute from "./Api/ProtectRoute";
const Profile = lazy(() => import("./Pages/Profile"));
const VehicleSetup = lazy(() => import("./Pages/VehicleSetup"));
const ConceptVehicle = lazy(() => import("./Pages/ConceptVehicle"));
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      {/* page-fade triggers a soft opacity fade on every route change */}
      <div key={location.pathname} className="page-fade">
        <Suspense
          fallback={
            <div className="min-h-screen bg-[#091413] flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-[#44ACFF]/30 border-t-[#44ACFF] rounded-full animate-spin" />
            </div>
          }
        >
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#0F1F1D",
                color: "#E8EDEC",
                border: "1px solid #1E332F",
              },
              success: {
                iconTheme: { primary: "#44ACFF", secondary: "#0F1F1D" },
              },
              error: {
                iconTheme: { primary: "#F2745B", secondary: "#0F1F1D" },
              },
            }}
          />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/concept" element={<ConceptVehicle />} />

            <Route
              path="/calculator"
              element={
                <ProtectedRoute>
                  <Calculator />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vehicle-setup"
              element={
                <ProtectedRoute>
                  <VehicleSetup />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/stations"
              element={
                <ProtectedRoute>
                  <Stations />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </>
  );
};

export default App;
