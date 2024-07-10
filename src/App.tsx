import { Suspense, lazy } from "react";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";

import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme";

const HomePage = lazy(() =>
  import("@/pages/home").then((module) => ({ default: module.HomePage })),
);
const ContextPage = lazy(() =>
  import("@/pages/context").then((module) => ({ default: module.ContextPage })),
);
const ZustandPage = lazy(() =>
  import("@/pages/zustand").then((module) => ({ default: module.ZustandPage })),
);
const RecoilPage = lazy(() =>
  import("@/pages/recoil").then((module) => ({ default: module.RecoilPage })),
);
const JotaiPage = lazy(() =>
  import("@/pages/jotai").then((module) => ({ default: module.JotaiPage })),
);
const MobXPage = lazy(() =>
  import("@/pages/mobx").then((module) => ({ default: module.MobXPage })),
);
const ValtioPage = lazy(() =>
  import("@/pages/valtio").then((module) => ({ default: module.ValtioPage })),
);

const Layout = () => {
  return (
    <ThemeProvider>
      <Navbar />

      <Suspense>
        <Outlet />
      </Suspense>
    </ThemeProvider>
  );
};

const router = createHashRouter(
  [
    {
      path: "/",
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
        {
          path: "valtio",
          element: <ValtioPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_PATH || "",
  },
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
