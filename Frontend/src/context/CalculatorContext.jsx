import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [EVresult, setEVResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculate = async (formData) => {
    try {
      setLoading(true);
      const data = await API.post("/calculator", formData);
      setEVResult(data);
      console.log(data)
    } catch (error) {
      console.log("Calculation Failed!", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <CalculatorContext.Provider value={{ EVresult,setEVResult, calculate, loading }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => useContext(CalculatorContext);