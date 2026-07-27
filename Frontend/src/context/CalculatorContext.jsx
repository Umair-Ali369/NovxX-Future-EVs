import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { useDashboard } from "../context/DashboardContext";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [EVresult, setEVResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [calcError, setCalcError] = useState("");

  const { refetch } = useDashboard();

  const calculate = async (formData) => {
    try {
      setLoading(true);
      setCalcError("");
      setEVResult(null);

      const data = await API.post("/calculator", formData);
      setEVResult(data);

      if (refetch) refetch();
    } catch (error) {
      console.log("Calculation Failed!", error);
      const msg =
        error?.response?.data?.message ||
        "Calculation failed. Please check your inputs and try again.";
      setCalcError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CalculatorContext.Provider
      value={{ EVresult, setEVResult, calculate, loading, calcError, setCalcError }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);
