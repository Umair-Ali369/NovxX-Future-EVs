import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token")
  const { user } = useAuth()
  if (!user || !token) {
    toast.error("Please Sign in to explore more features!")
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
