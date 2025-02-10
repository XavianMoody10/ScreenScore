import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { IsPageLoadingContext } from "../../context/IsPageLoadingContext";

export const MediaSwitch = () => {
  const { media } = useParams();
  const { isLoading } = useContext(IsPageLoadingContext);

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

      <AnimatePresence>
        {isLoading && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ delay: 2 }}
            className=" absolute top-0 left-0 bottom-0 right-0 w-full h-full z-20"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
