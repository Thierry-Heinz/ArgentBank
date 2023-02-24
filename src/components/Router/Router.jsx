import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { HomePage } from "../../containers/HomePage/HomePage";
import { SignInPage } from "../../containers/SignInPage";
import { UserPage } from "../../containers/UserPage";
import { TransactionsPage } from "../../containers/TransactionsPage";
import { Footer } from "../../components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signin", element: <SignInPage /> },
      { path: "/user", element: <UserPage /> },
      { path: "/transactions", element: <TransactionsPage /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
