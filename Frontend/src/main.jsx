import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { CalculatorProvider } from "./context/CalculatorContext.jsx";
import { DashboardProvider } from "./context/DashboardContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DashboardProvider>
          <CalculatorProvider>
            <App />
          </CalculatorProvider>
        </DashboardProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
