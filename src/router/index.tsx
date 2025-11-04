import { createBrowserRouter, RouterProvider } from "react-router-dom";

import rootRoutes from "./routes.tsx";

export default function Router() {
  const router = createBrowserRouter(rootRoutes);

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    />
  );
}
