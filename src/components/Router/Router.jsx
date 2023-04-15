import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../../containers/HomePage";
import UserPage from "../../containers/UserPage";

import SignInPage from "../../containers/SignInPage";

import RequireAuth from "../../features/auth/RequireAuth";
import Layout from "../Layout";
import ErrorPage from "../../containers/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Set the Layout with the <Outlet/> */}
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />

          {/* protected routes get RequireAuth  */}
          <Route element={<RequireAuth />}>
            <Route path="profile" element={<UserPage />} />
          </Route>

          {/* Error Page * wildcard */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
