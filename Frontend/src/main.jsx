import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { CalculatorProvider } from "./context/CalculatorContext.jsx";
import { DashboardProvider } from "./context/DashboardContext.jsx";
import { AIProvider } from "./context/AIContext.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <AuthProvider>
        <DashboardProvider>
          <CalculatorProvider>
            <AIProvider>
              <App />
            </AIProvider>
          </CalculatorProvider>
        </DashboardProvider>
      </AuthProvider>
    </BrowserRouter>
);
