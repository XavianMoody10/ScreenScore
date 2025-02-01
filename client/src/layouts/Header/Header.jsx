import React from "react";
import Logo from "../../assets/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className=" fixed top-0 w-full bg-white/5 z-20">
        <div className=" flex items-center justify-between w-[95%] mx-auto py-4 lg:py-7">
          <div className=" lg:hidden">
            <Hamburger color="white" size={25} />
          </div>

          <Link to={"/"}>
            <img src={Logo} alt="" width={180} className=" lg:w-[210px]" />
          </Link>

          <nav className=" hidden lg:block">
            <ul className=" flex gap-2">
              <li>
                <Link
                  to={"/movies"}
                  className=" border-2 border-white bg-white px-7 py-3 rounded-lg font-bold hover:border-black hover:bg-black hover:text-white duration-150"
                >
                  Movies
                </Link>
              </li>

              <li>
                <Link
                  to={"/tv_shows"}
                  className=" border-2 border-white bg-white px-7 py-3 rounded-lg font-bold hover:border-black hover:bg-black hover:text-white duration-150"
                >
                  TV Shows
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Outlet></Outlet>
    </>
  );
};
