import { useLocation, Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

// Check if th token is set, if not redirect to HomePage
const RequireAuth = () => {
  //get the token using the useSelector hook
  const token = useSelector(selectCurrentToken);
  // get the location of the user (react-router)
  const location = useLocation();

  // if token is true load display the outlet (and the navigated page or component) else redirect to homepage
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
export default RequireAuth;
