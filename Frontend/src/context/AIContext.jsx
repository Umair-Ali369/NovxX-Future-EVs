import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import API from "../api/api";
 
const AIContext = createContext();
 
export const AIProvider = ({ children }) => {
  const [aiInsights, setAiInsights] = useState([]);
  const [weeklySummary, setWeeklySummary] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);
 
  // ── Restore cached weekly summary on mount ──
  useEffect(() => {
    try {
      const cached = localStorage.getItem("novxx_weekly_summary");
      if (cached) {
        const parsed = JSON.parse(cached);
        // Use cache only if less than 24 hours old
        if (Date.now() - parsed.timestamp < 24 * 60 * 60 * 1000) {
          setWeeklySummary(parsed.data);
        } else {
          localStorage.removeItem("novxx_weekly_summary");
        }
      }
    } catch {
      localStorage.removeItem("novxx_weekly_summary");
    }
  }, []);
 
  // ── Generate insights after calculator ──
  const generateInsights = useCallback(async (calculationData) => {
    setAiLoading(true);
    setAiError(null);
    try {
      const { data } = await API.post("/ai/insights", calculationData);
      setAiInsights(data.aiInsights || []);
    } catch (err) {
      const msg =
        err.response?.status === 429
          ? "Rate limit reached. Try again in a moment."
          : err.response?.data?.message || "Failed to generate insights.";
      setAiError(msg);
    } finally {
      setAiLoading(false);
    }
  }, []);
 
  // ── Generate weekly summary for dashboard ──
  const generateWeekly = useCallback(async (calculations) => {
    if (!calculations || calculations.length < 3) return;
    setAiLoading(true);
    setAiError(null);
    try {
      const { data } = await API.post("/ai/weekly-summary", { calculations });
      setWeeklySummary(data);
      // Cache it
      localStorage.setItem(
        "novxx_weekly_summary",
        JSON.stringify({ data, timestamp: Date.now() })
      );
    } catch (err) {
      const msg =
        err.response?.status === 429
          ? "Rate limit reached. Try again in a moment."
          : err.response?.data?.message || "Failed to generate summary.";
      setAiError(msg);
    } finally {
      setAiLoading(false);
    }
  }, []);
 
  // ── Clear state ──
  const clearAI = useCallback(() => {
    setAiInsights([]);
    setAiError(null);
  }, []);
 
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
 