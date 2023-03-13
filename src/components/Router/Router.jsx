import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Navbar";
import HomePage from "../../containers/HomePage";
import UserPage from "../../containers/UserPage";
import TransactionsPage from "../../containers/TransactionsPage";
import Footer from "../Footer";

import SignInPage from "../../containers/SignInPage";

import Welcome from "../User/UserWelcome/Welcome";
import RequireAuth from "../../features/auth/RequireAuth";
import Layout from "../Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="profile" element={<UserPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
