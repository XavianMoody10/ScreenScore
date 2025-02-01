import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdError as ErrorIcon } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { motion, AnimatePresence } from "motion/react";
import { getMoviesMediaList } from "../../services/movies.services";

export const SmallMediaSlider = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch media data
  async function fetchData() {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await getMoviesMediaList(endpoint);
      const results = response.data.results;
      setData(results);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Display media
  const moviesMap = data.map((d) => {
    const bgImageUrl = `https://image.tmdb.org/t/p/original${d.poster_path}`;

    return (
      <SwiperSlide key={d.id}>
        <div className=" relative">
          <div>
            <img src={bgImageUrl} alt="" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className=" absolute top-0 left-0 right-0 bottom-0 bg-black/70"
          >
            <div className=" absolute bottom-5 left-5 max-w-[700px] space-y-3">
              <h2 className=" text-white text-xl font-bold">
                {d.title || d.name}
              </h2>
            </div>
          </motion.div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className=" relative min-h-[300px]">
      {errorMessage && (
        <div className=" bg-gray-950 absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center text-white gap-2 min-[425px]:flex-row">
          <h2 className=" text-2xl font-medium min-[425px]:text-3xl">
            {errorMessage}
          </h2>
          <ErrorIcon size={45} />
        </div>
      )}

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className="  bg-gray-950 absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center z-20"
          >
            <ClipLoader color="white" />
          </motion.div>
        )}
      </AnimatePresence>

      {!errorMessage && (
        <Swiper
          breakpoints={{
            375: {
              slidesPerView: 2.2,
              spaceBetween: 15,
            },

            500: {
              slidesPerView: 3.2,
              spaceBetween: 15,
            },

            1024: {
              slidesPerView: 4.2,
              spaceBetween: 15,
            },

            1280: {
              slidesPerView: 5.2,
              spaceBetween: 15,
            },
          }}
        >
          {moviesMap}
        </Swiper>
      )}
    </div>
  );
};
