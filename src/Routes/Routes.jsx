import { createBrowserRouter } from "react-router";
import MainLayout from "./../Layouts/MainLayout";
import Home from "./../Pages/Home";
import Products from "./../Pages/Products";
import ErrorPage from "../Pages/ErrorPage";
import Wishlist from "./../Pages/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);
