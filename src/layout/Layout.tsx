import { Outlet } from "react-router-dom";

import { DefaultLayout } from "./index.ts";

export default function Layout() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}
