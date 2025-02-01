import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Home = () => {
  return (
    <main className=" bg-gray-950">
      <section className=" h-screen flex flex-col gap-10 items-center justify-center">
        <div className=" w-[80%] max-w-[600px]">
          <img src={logo} alt="" className=" mx-auto w-full" />
        </div>

        <div className=" space-x-3">
          <Link
            to={"/movies"}
            className=" border-2 bg-black text-white px-7 py-3 rounded-lg font-medium hover:bg-white hover:text-black duration-150"
          >
            Movies
          </Link>

          <Link
            to={"/tv_shows"}
            className=" border-2 bg-black text-white px-7 py-3 rounded-lg font-medium hover:bg-white hover:text-black duration-150"
          >
            TV Shows
          </Link>
        </div>
      </section>
    </main>
  );
};
