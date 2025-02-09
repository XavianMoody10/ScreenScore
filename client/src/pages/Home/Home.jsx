import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <section className=" h-screen flex flex-col items-center justify-center gap-6 p-5 sm:p-14">
        <div className=" max-w-[600px]">
          <img src={logo} alt="Logo" className=" w-full" />
        </div>

        <p className=" text-center max-w-[600px] font-primary-font hidden sm:block text-lg">
          A MERN-stack application that allows users to review and rate movies
          and TV shows
        </p>

        <div className=" w-full max-w-[200px]">
          <Link
            className=" border-2 w-full block font-semibold text-center py-2 rounded-lg hover:bg-black hover:text-white font-primary-font sm:text-lg"
            to={"/movies"}
          >
            Explore
          </Link>
        </div>
      </section>
    </main>
  );
};
