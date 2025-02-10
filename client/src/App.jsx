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
import { Details } from "./pages/Details/Details";
import { Header } from "./layouts/Header/Header";

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />

        <Route path="/:media">
          <Route element={<Header></Header>}>
            <Route index element={<Catalog />} />
            <Route path=":id" element={<Details />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <IsPageLoadingProvider>
      <RouterProvider router={router}></RouterProvider>
    </IsPageLoadingProvider>
  );
};

export default App;
