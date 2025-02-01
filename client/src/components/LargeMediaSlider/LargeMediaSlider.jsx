import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdError as ErrorIcon } from "react-icons/md";
import ClipLoader from "react-spinners/ClipLoader";
import { motion, AnimatePresence } from "motion/react";

export const LargeMediaSlider = ({ fetchEvent }) => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch media data
  async function fetchData() {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetchEvent();
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
    const bgImageUrl = `https://image.tmdb.org/t/p/original${d.backdrop_path}`;

    return (
      <SwiperSlide key={d.id}>
        <div
          style={{ backgroundImage: `url(${bgImageUrl})` }}
          className=" bg-cover bg-top h-[95vh]"
        >
          <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/60">
            <div className=" absolute bottom-5 left-5 max-w-[700px] space-y-3 lg:bottom-10 lg:left-10">
              <h2 className=" text-white text-4xl font-bold">
                {d.title || d.name}
              </h2>
              <p className=" text-white font-medium text-lg hidden md:block">
                {d.overview}
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className=" h-[95vh]">
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
            className=" bg-gray-950 absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center z-20"
          >
            <ClipLoader color="white" />
          </motion.div>
        )}
      </AnimatePresence>

      {!errorMessage && <Swiper>{moviesMap}</Swiper>}
    </div>
  );
};
