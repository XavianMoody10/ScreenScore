import React, { useContext } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { IsPageLoadingContext } from "../../context/IsPageLoadingContext";
import { AnimatePresence, motion } from "motion/react";

export const CatalogFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const { media } = useParams();
  const { isLoading } = useContext(IsPageLoadingContext);

  const moviesCategories = [
    { text: "Trending", value: "trending" },
    { text: "Now Playing", value: "now_playing" },
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
      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 2 }}
            className=" absolute top-0 left-0 bottom-0 right-0 w-full h-full z-20"
          ></motion.div>
        )}
      </AnimatePresence>

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
