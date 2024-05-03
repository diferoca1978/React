import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { status } = useSelector((state) => state.auth);

  if (status === "not-authenticated") {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export const AllowRoutes = ({ children }) => {
  const { status } = useSelector((state) => state.auth);

  if (status === "authenticated") {
    return <Navigate to="/home" replace />;
  }

  return children;
};
