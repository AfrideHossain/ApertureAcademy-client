import { Navigate, useLocation } from "react-router-dom";
import useContextHook from "../../hooks/useContextHook";

const SecretRoute = ({ children }) => {
  const { user, loading } = useContextHook();
  const location = useLocation();
  if (loading) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default SecretRoute;
