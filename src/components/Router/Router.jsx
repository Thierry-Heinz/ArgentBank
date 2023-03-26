import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../../containers/HomePage";
import UserPage from "../../containers/UserPage";
import TransactionsPage from "../../containers/TransactionsPage";

import SignInPage from "../../containers/SignInPage";

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
            <Route path="profile" element={<UserPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
