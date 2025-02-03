import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight as RightArrow } from "react-icons/md";
import { SmallMediaSlider } from "../../components/SmallMediaSlider/SmallMediaSlider";
import { LargeMediaSlider } from "../../components/LargeMediaSlider/LargeMediaSlider";
import { getTrendingTVShows } from "../../services/tvShows.services";

export const TVShowsDashboard = () => {
  // Data for sections with small slider
  const smallSlidersectionsData = [
    {
      subheading: "Airing Later",
      subheadingPath: "/tv_shows/airing_today",
      endpoint: "http://localhost:3001/tv_shows/airing_today",
    },
    {
      subheading: "Currently On The Air",
      subheadingPath: "/tv_shows/on_the_air",
      endpoint: "http://localhost:3001/tv_shows/on_the_air",
    },
    {
      subheading: "Popular",
      subheadingPath: "/tv_shows/popular",
      endpoint: "http://localhost:3001/tv_shows/popular",
    },
  ];

  // Display sections
  const smallSliderSectionsMap = smallSlidersectionsData.map((s) => {
    return (
      <section className=" w-[95%] mx-auto space-y-5" key={s.subheading}>
        <Link
          to={s.subheadingPath}
          className=" flex justify-center border-b-2 hover:border-white sm:justify-start sm:w-fit"
        >
          <span className=" text-2xl xl:text-3xl text-white font-extrabold">
            {s.subheading}
          </span>

          <RightArrow size={40} color="white" />
        </Link>

        <SmallMediaSlider endpoint={s.endpoint} />
      </section>
    );
  });

  return (
    <main className=" min-h-screen bg-gray-950 space-y-10">
      <section>
        <LargeMediaSlider fetchEvent={getTrendingTVShows} />
      </section>

      {smallSliderSectionsMap}
    </main>
  );
};
