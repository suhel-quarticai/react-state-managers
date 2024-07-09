import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { HomePage } from "./pages/home";
import { ContextPage } from "./pages/context";
import { ZustandPage } from "./pages/zustand";
import { RecoilPage } from "./pages/recoil";
import { JotaiPage } from "./pages/jotai";
import { MobXPage } from "./pages/mobx";

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
      {
        path: "zustand",
        element: <ZustandPage />,
      },
      {
        path: "recoil",
        element: <RecoilPage />,
      },
      {
        path: "jotai",
        element: <JotaiPage />,
      },
      {
        path: "mobx",
        element: <MobXPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
