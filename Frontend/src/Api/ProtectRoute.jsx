import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const { user } = useAuth()
  if (!user || !token) {
    <navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
