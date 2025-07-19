import React from "react";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md py-3">
      <div className="container m-auto flex items-center justify-between py-2 px-4">
        <a href="#">
          <h1 className="text-2xl font-extrabold text-[#3D00B7]">NFTERS</h1>
        </a>
        <ul className="flex items-center gap-8 text-md font-semibold">
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
            className="border w-[300px] rounded-3xl py-2 px-4 border-[#EFEFEF]"
            type="text"
            name="search"
            id="search"
          />
          <FontAwesomeIcon
            className="absolute top-3.5 right-2 text-gray-400"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <button className="text-center bg-[#3D00B7] py-2 px-6 text-white rounded-4xl">
            Upload
          </button>
          <button className="text-center py-2 px-4 text-[#3D00B7] font-semibold border border-[#3D00B7] rounded-4xl">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
