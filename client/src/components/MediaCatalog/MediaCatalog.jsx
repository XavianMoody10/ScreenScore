import React, { useEffect, useState } from "react";
import { fetchMediaList } from "../../services/media.services";
import { useParams, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import ClipLoader from "react-spinners/ClipLoader";

export const MediaCatalog = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { media } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  // Fetch media data from server
  async function fetchMedia(media, category, page) {
    setData([]);
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await fetchMediaList(media, category, page);
      const results = response.data.results;
      setTimeout(() => setData(results), 500);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMedia(media, "trending", 1);
  }, [media, category]);

  // Display movies and tv shows
  const mediaMap = data.map((m) => {
    const posterURL = `https://image.tmdb.org/t/p/original${m.poster_path}`;

    return (
      <div key={m.id} className=" relative">
        <div>
          <img src={posterURL} alt={`${m.title || m.name} Poster`} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className=" absolute top-0 left-0 right-0 bottom-0 bg-black/55"
        ></motion.div>
      </div>
    );
  });

  return (
    <>
      {!errorMessage && !isLoading && (
        <div className=" max-w-[1600px] w-[85%] mx-auto grid gap-4 min-[400px]:grid-cols-2 min-[600px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {mediaMap}
        </div>
      )}

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className=" fixed top-0 left-0 bottom-0 right-0 bg-white flex items-center justify-center"
          >
            <ClipLoader />
          </motion.div>
        )}
      </AnimatePresence>

      {errorMessage && (
        <div className=" fixed top-0 left-0 bottom-0 right-0 bg-white flex items-center justify-center">
          <p className=" text-5xl text-red-500 font-bold">{errorMessage}</p>
        </div>
      )}
    </>
  );
};
