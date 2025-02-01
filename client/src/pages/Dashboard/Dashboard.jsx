import React from "react";
import { LargeMediaSlider } from "../../components/LargeMediaSlider/LargeMediaSlider";
import { getTrendingMovies } from "../../services/movies.services";

export const Dashboard = () => {
  return (
    <main className=" min-h-screen bg-gray-950">
      <section>
        <LargeMediaSlider fetchEvent={getTrendingMovies} />
      </section>
    </main>
  );
};
