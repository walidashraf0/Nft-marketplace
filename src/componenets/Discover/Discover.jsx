import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Card from "../Card/Card";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const categories = [
  "All Categories",
  "Art",
  "Celebrities",
  "Sport",
  "Gaming",
  "Crypto",
  "Music",
];

const Discover = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  return (
    <>
      <div className="bg-[#D9E0EC]/20">
        <div className="container mx-auto px-4 py-6">
          <div className="p-10">
            <h2 className="text-2xl font-extrabold uppercase">
              Discover More NFTS
            </h2>
            <div className="flex items-center justify-between mt-4">
              <ul className="flex items-center gap-4">
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`px-4 py-2 ${
                      activeIndex === index
                        ? "bg-[#3D00B7] text-white"
                        : "bg-[#DCDCDC]/20 text-black"
                    }  rounded-full cursor-pointer`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
              <span className="px-4 py-2 rounded-full cursor-pointer bg-[#DCDCDC]/20 flex items-center gap-2">
                <FontAwesomeIcon icon={faArrowDownWideShort} />
                Filters
              </span>
            </div>
            <div className="mt-8 px-4 w-full grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
              {Array.from({ length: 16 }).map((_, idx) => (
                <Card key={idx} />
              ))}
            </div>
            <div className="w-full flex justify-center mt-10">
                <SecondaryButton text={"More NFTs"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
