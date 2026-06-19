import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const token = localStorage.getItem("token")
  const [statsData, setStatsData] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!token) return;
      try {
        const data = await API.get("/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStatsData(data);
        console.log(data)
      } catch (error) {
        console.error("Dashboard fetch failed", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData()
  }, [ token]);

  return (
    <DashboardContext.Provider
      value={{
        statsData, loading
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  return useContext(DashboardContext);
};
