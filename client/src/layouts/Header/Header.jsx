import React from "react";
import logo from "../../assets/logo.png";
import { MediaSwitch } from "../../components/MediaSwitch/MediaSwitch";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" relative z-10 py-5 md:py-8">
      <div className=" flex flex-col items-center justify-between gap-8 w-[85%] max-w-[1600px] mx-auto md:flex-row">
        <Link to={"/"} className=" max-w-[250px]">
          <img src={logo} alt="" className=" w-full" />
        </Link>

        <MediaSwitch />
      </div>
    </header>
  );
};
