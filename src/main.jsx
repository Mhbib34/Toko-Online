import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPages from "./pages/main.jsx";
import LoginPages from "./pages/loginPages.jsx";
import RegisterPages from "./pages/registerPages.jsx";
import CartPages from "./pages/cart.jsx";
import DetailProduct from "./pages/detailProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPages />,
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/register",
    element: <RegisterPages />,
  },
  {
    path: "/cart",
    element: <CartPages />,
  },
  {
    path: "/card/detail/:id",
    element: <DetailProduct />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
