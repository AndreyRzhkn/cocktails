import { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

import MainLayout from "@layouts/MainLayout";
import { routes } from "./routes";

function Router() {
  const element = useRoutes(routes);

  return <Suspense fallback={<h3>Loading ... </h3>}>{element}</Suspense>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  );
}
