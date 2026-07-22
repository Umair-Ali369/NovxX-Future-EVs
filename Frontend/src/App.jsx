import React from "react";
import Navbar from "./components/Navbar";
import Features from "./Pages/Features";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Calculator from "./Pages/Calculator";
import Stations from "./Pages/Stations";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Api/ProtectRoute";
import Profile from "./Pages/Profile";
import VehicleSetup from "./Pages/VehicleSetup";
import ConceptVehicle from "./Pages/ConceptVehicle";
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
       <ScrollToTop />
      {/* page-fade triggers a soft opacity fade on every route change */}
      <div key={location.pathname} className="page-fade">
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
      </div>

      <Footer />
    </>
  );
};

export default App;
