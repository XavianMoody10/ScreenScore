import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { IsPageLoadingProvider } from "./context/IsPageLoadingContext";

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />

        <Route path="/:media" element={<Catalog />} />
      </Route>
    )
  );

  return (
    <IsPageLoadingProvider>
      <RouterProvider router={router}></RouterProvider>;
    </IsPageLoadingProvider>
  );
};

export default App;
