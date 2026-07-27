import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          localStorage.removeItem("user");
        }
      }
    }
  }, [token]);

// --------- REGISTER ---------
  const register = async (formData) => {
    try {
      const { data } = await API.post("/user/register", formData);
      navigate("/login");
      return data
    } catch (error) {
      console.log(error);
    }
  };

  // --------- LOGIN ---------
  // const login = async (formData) => {
  //   try {
  //     const { data } = await API.post("/user/login", formData);

  //     localStorage.setItem("token", data.token);
  //     localStorage.setItem("user", JSON.stringify(data.User));

  //     setUser(data.User);
  //     setToken(data.token);
  //     navigate("/dashboard");
  //     return data
  //   } catch (error) {
  //     return error;
  //     console.log(error);
  //   }
  // };
  const login = async (formData) => {
    try {
      const { data } = await API.post("/user/login", formData);
  
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.User));
  
      setUser(data.User);
      setToken(data.token);
      navigate("/dashboard"); // keep consistent
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error; // throw instead of returning raw error
    }
  };
  
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    window.location.href = "/login";
  };
  
  const updateProfile = async (profileData) => {
    try {
      const { data } = await API.put("/profile", profileData);
      setUser(data.data);
      localStorage.setItem("user", JSON.stringify(data.data));
      return true;
    } catch (error) {
      console.error("Profile update error:", error);
      return false;
    }
  };

  const getProfile = async () => {
    try {
      const { data } = await API.get("/profile");
      setUser(data.data);
      localStorage.setItem("user", JSON.stringify(data.data));
      return data.data
    } catch (error) {
      console.error("Get profile error:", error);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        register,
        login,
        updateProfile,
        getProfile,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
