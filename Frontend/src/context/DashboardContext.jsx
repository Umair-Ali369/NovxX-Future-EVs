import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { useAuth } from "../context/AuthContext";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [statsData, setStatsData] = useState();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await API.get("/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStatsData(data);
      } catch (err) {
        console.log("Dashboard fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [user]);

  const refetch = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      setLoading(true);
      const { data } = await API.get("/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStatsData(data);
    } catch (error) {
      console.error("Dashboard refetch failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        statsData,
        loading,
        refetch
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  return useContext(DashboardContext);
};
