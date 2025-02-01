import React from "react";
import { MdOutlineKeyboardArrowRight as RightArrow } from "react-icons/md";
import { getTrendingMovies } from "../../services/movies.services";
import { Link } from "react-router-dom";
import { LargeMediaSlider } from "../../components/LargeMediaSlider/LargeMediaSlider";
import { SmallMediaSlider } from "../../components/SmallMediaSlider/SmallMediaSlider";

export const Dashboard = () => {
  // Data for sections with small slider
  const smallSlidersectionsData = [
    {
      subheading: "Now Playing",
      subheadingPath: "/movies/now_playing",
      endpoint: "http://localhost:3001/movies/now_playing",
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
          <span className=" text-2xl text-white font-extrabold">
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
        <LargeMediaSlider fetchEvent={getTrendingMovies} />
      </section>

      {smallSliderSectionsMap}
    </main>
  );
};
