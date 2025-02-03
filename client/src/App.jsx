import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MoviesDashboard } from "./pages/MoviesDashboard/MoviesDashboard";
import { Header } from "./layouts/Header/Header";
import { MediaLibrary } from "./pages/MediaLibrary/MediaLibrary";
import { TVShowsDashboard } from "./pages/TVShowsDashboard/TVShowsDashboard";

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />

        <Route element={<Header />}>
          <Route path="movies">
            <Route index element={<MoviesDashboard />} />
            <Route path=":list" element={<MediaLibrary />} />
          </Route>

          <Route path="tv_shows">
            <Route index element={<TVShowsDashboard />} />
            <Route path=":list" element={<MediaLibrary />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
