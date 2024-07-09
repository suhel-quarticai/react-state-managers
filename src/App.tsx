import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ContextPage } from "./pages/context";
import { HomePage } from "./pages/home";
import { Navbar } from "@/components/navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "context",
        element: <ContextPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
