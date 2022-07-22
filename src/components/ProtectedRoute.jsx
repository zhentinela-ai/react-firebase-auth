import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {

  const { user, loading } = useAuth();

  console.log(user);

  if (loading) return <h1>loading</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}
