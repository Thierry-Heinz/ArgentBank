import { useLocation, Navigate, Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import { useGetProfileQuery } from "../../features/profile/profileApiSlice";
import { setProfile } from "../../features/profile/profileSlice";

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};
export default RequireAuth;
