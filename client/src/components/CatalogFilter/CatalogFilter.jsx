import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const CatalogFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { media } = useParams();

  const moviesCategories = [
    { text: "Trending", value: "trending" },
    { text: "Now Playing", value: "trending" },
    { text: "Popular", value: "popular" },
    { text: "Top Rated", value: "top_rated" },
    { text: "Upcoming", value: "upcoming" },
  ];

  const tvShowsCategories = [
    { text: "Trending", value: "trending" },
    { text: "Airing Today", value: "airing_today" },
    { text: "On the Air", value: "on_the_air" },
    { text: "Popular", value: "popular" },
    { text: "Top Rated", value: "top_rated" },
  ];

  // Display categories for movies
  const moviesCategoriesMap = moviesCategories.map((c) => {
    return (
      <option key={c.text} value={c.value}>
        {c.text}
      </option>
    );
  });

  // Display categories for tv shows
  const tvShowsCategoriesMap = tvShowsCategories.map((c) => {
    return (
      <option key={c.text} value={c.value}>
        {c.text}
      </option>
    );
  });

  return (
    <div className=" w-[85%] max-w-[1600px] mx-auto flex justify-center relative z-10 md:justify-end">
      <select
        name="category"
        id="category"
        className=" border p-2 font-medium w-full max-w-[200px]"
        value={category || "trending"}
        onChange={(e) => setSearchParams({ category: e.target.value })}
      >
        {media === "movies" && moviesCategoriesMap}
        {media === "tv_shows" && tvShowsCategoriesMap}
      </select>
    </div>
  );
};
