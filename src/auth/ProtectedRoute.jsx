import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
export default ProtectedRoute;
