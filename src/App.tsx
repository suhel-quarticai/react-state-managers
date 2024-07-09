import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { ContextPage } from "./pages/context";
import { HomePage } from "./pages/home";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme";

const Layout = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Outlet />
    </ThemeProvider>
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
