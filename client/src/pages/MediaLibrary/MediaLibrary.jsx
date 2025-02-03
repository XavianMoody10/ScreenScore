import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMoviesMediaList } from "../../services/movies.services";
import { AnimatePresence, motion } from "motion/react";
import ClipLoader from "react-spinners/ClipLoader";

export const MediaLibrary = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newDataIsLoading, setNewDataIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrgetnPage] = useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(3);
  const containerRef = useRef(null);
  const { list } = useParams();
  const location = useLocation();
  const base = location.pathname.split("/");

  async function fetchData(page) {
    setErrorMessage("");

    const endpoint = `http://localhost:3001/${base[1]}/${list}`;

    try {
      const response = await getMoviesMediaList(endpoint, page);
      const results = response.data.results;
      const totalPages = response.data.total_pages;

      const updatedData = [...data, ...results];

      // setTotalNumberOfPages(totalPages) // total Number Of Pages

      setData(updatedData);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);

      if (totalNumberOfPages === currentPage) {
        setNewDataIsLoading(false);
      }
    }
  }

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const options = {
      rootMargin: "0px 0px 200px 0px",
      threshold: 1,
    };

    function callback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrgetnPage((prev) => prev + 1);
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const mediaMap = data.map((m) => {
    const bgImageUrl = `https://image.tmdb.org/t/p/original${m.poster_path}`;

    return (
      <div key={m.id} className=" relative">
        <div>
          <img src={m.poster_path ? bgImageUrl : null} alt="" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className=" absolute top-0 left-0 right-0 bottom-0 bg-black/70"
        >
          <div className=" absolute bottom-5 left-5 max-w-[700px] space-y-3">
            <h2 className=" text-white text-xl font-bold">
              {m.title || m.name}
            </h2>
          </div>
        </motion.div>
      </div>
    );
  });

  return (
    <main className=" bg-gray-950 min-h-[150vh]">
      <section className=" pt-[80px] lg:pt-[93.0625px] border-2">
        <div className=" min-h-[150vh] w-[95%] mx-auto grid grid-cols-1 gap-3 min-[425px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {mediaMap}
        </div>

        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isLoading ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.5 }}
              className=" fixed top-0 w-full h-screen bg-gray-950 z-10 flex items-center justify-center"
            >
              <ClipLoader size={40} color="white" />
            </motion.div>
          )}
        </AnimatePresence>

        {newDataIsLoading && (
          <div
            ref={containerRef}
            className=" w-full py-5 flex items-center justify-center"
          >
            <ClipLoader size={30} color="white" />
          </div>
        )}
      </section>
    </main>
  );
};
