import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  let isAuthenticated = true; // Replace this with your authentication logic
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
