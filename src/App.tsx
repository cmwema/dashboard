import { Home } from "./pages/home/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Users } from "./pages/users/users";
import { Products } from "./pages/products/products";
import { Layout } from "./layout/Layout";
import Login from "./pages/login/login";
import "./styles/global.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
