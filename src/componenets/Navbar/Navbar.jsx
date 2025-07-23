import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import MainButton from "../MainButton/MainButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md py-3">
      <div className="container m-auto flex items-center justify-between py-2 px-4">
        <a href="#">
          <h1 className="text-2xl font-extrabold text-[#3D00B7]">NFTERS</h1>
        </a>
        <ul className="flex items-center gap-8 text-md font-semibold max-md:hidden">
          <li className="hover:text-[#3D00B7] transition-colors">
            <a href="#">Marketplace</a>
          </li>
          <li className="hover:text-[#3D00B7] transition-colors">
            <a href="#">Resources</a>
          </li>
          <li className="hover:text-[#3D00B7] transition-colors">
            <a href="#">About</a>
          </li>
        </ul>
        <div className="relative">
          <input
            placeholder="Search"
            className="border w-[300px] rounded-3xl py-2 px-4 border-[#EFEFEF] max-md:hidden"
            type="text"
            name="search"
            id="search"
          />
          <FontAwesomeIcon
            className="absolute top-3.5 max-md:text-xl right-2 text-gray-400 max-md:transform max-md:translate-x-[-50%] max-md:translate-y-[-50%] cursor-pointer max-sm:hidden"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <MainButton text="Upload" />
          <SecondaryButton text={"Connect Wallet"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
