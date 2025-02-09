import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";

export const MediaSwitch = () => {
  const { media } = useParams();
  const activeClass =
    " w-full text-center py-2 font-primary-font text-white z-10";
  const notActiveClass =
    " w-full text-center py-2 font-primary-font text-black z-10";

  return (
    <div className=" flex w-full max-w-[230px] border-2 rounded-lg relative">
      <Link
        to={"/movies"}
        className={media === "movies" ? activeClass : notActiveClass}
      >
        Movies
      </Link>

      <Link
        to={"/tv_shows"}
        className={media === "tv_shows" ? activeClass : notActiveClass}
      >
        TV Shows
      </Link>

      <motion.div
        initial={{ x: media === "movies" ? 0 : "100%" }}
        animate={{ x: media === "movies" ? 0 : "100%" }}
        transition={{ stiffness: 0 }}
        className=" absolute h-full w-[50%] bg-black"
      />
    </div>
  );
};
