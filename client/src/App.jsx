import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Header } from "./layouts/Header/Header";

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home></Home>}></Route>

        <Route element={<Header />}>
          <Route path=":media" element={<Dashboard></Dashboard>}>
            {/* <Route path=":list"></Route> */}
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
