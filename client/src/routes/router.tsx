import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import Product from "../pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Product />,
        // loader: teamLoader,
      },
      {
        path: "/newproduct",
        element: <AddProduct />,
        // loader: teamLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
        // loader: teamLoader,
      },
      {
        path: "/order",
        element: <Order />,
        // loader: teamLoader,
      },
    ],
  },
]);

export default router;
