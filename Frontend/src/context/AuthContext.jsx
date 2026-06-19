import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();



  const register = async (formData) => {
    try {
      const { data } = await API.post("/user/register", formData);
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  const login = async (formData) => {
    try {
      const { data } = await API.post("/user/login", formData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.User));

      setUser(data.User);
      setToken(data.token)
      navigate("/dashboard")
    } catch (error) {
      return error;
      console.log(error)
    }
  };

  useEffect(() => {
    if (token) {
      const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    }
  }, [token]);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setUser(null)
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
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
