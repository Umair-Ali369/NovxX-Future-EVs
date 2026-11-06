import { createContext, useContext,useCallback, useState } from "react";
import API from "../Api/api"

const AIContext = createContext();

export const AIProvider = ({ children }) => {
  const [aiInsights, setAiInsights] = useState([]);
  const [weeklySummary, setWeeklySummary] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");

  // Generate AI insights for a single calculation result
  const generateInsights = useCallback(async (calculationData) => {
    try {
      setAiLoading(true);
      setAiError("");
      setAiInsights([]);

      const token = localStorage.getItem("token");
      const { data } = await API.post("/ai/insights", calculationData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAiInsights(data.aiInsights || []);
      return data.aiInsights;
      console.log(data)
    } catch (error) {
      console.error("AI insights error:", error);
      if (error?.response?.status === 429) {
        setAiError("Rate limit reached. Please wait a few seconds.");
      } else {
        setAiError("Could not generate AI insights. Please try again.");
      }
      return [];
    } finally {
      setAiLoading(false);
    }
  }, [] )

  // Generate weekly driving summary from calculation history
  const generateWeekly = useCallback(async (calculations) => {
    try {
      setAiLoading(true);
      setAiError("");

      const token = localStorage.getItem("token");
      const { data } = await API.post(
        "/ai/weekly-summary",
        { calculations },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setWeeklySummary(data);
      return data;
    } catch (error) {
      console.error("Weekly summary error:", error);
      setAiError("Could not generate weekly summary. Please try again.");
      return null;
    } finally {
      setAiLoading(false);
    }
  }, [])

  const clearAI = useCallback(() => {
    setAiInsights([]);
    setWeeklySummary(null);
    setAiError("");
  },[])

  return (
    <AIContext.Provider
      value={{
        aiInsights,
        weeklySummary,
        aiLoading,
        aiError,
        generateInsights,
        generateWeekly,
        clearAI,
      }}
    >
      {children}
    </AIContext.Provider>
  );
};

export const useAI = () => useContext(AIContext);