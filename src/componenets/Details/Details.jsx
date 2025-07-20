import {
  faCalendarCheck,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Details = () => {
  return (
    <>
      <div className="w-full bg-[#D9E0EC]/20">
        <div className="container m-auto px-4 py-2">
          <div className="flex items-center justify-between gap-4 p-10">
            <h1 className="text-2xl font-extrabold uppercase max-w-[300px]">
              The amazing NFT art of the world here
            </h1>
            <div className="flex items-start justify-center">
              <div className="text-3xl mr-4">
                <FontAwesomeIcon icon={faCalendarCheck} />
              </div>
              <article>
                <h2 className="font-bold text-lg">Fast Transaction</h2>
                <p className="text-gray-500 max-w-[400px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  maxime, ea consequatur quidem ut vel illo illum sunt veritatis
                  nulla.
                </p>
              </article>
            </div>
            <div className="flex items-start justify-center">
              <div className="text-3xl mr-4">
                <FontAwesomeIcon icon={faSquarePollVertical} />
              </div>
              <article>
                <h2 className="font-bold text-lg">Fast Transaction</h2>
                <p className="text-gray-500 max-w-[400px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                  maxime, ea consequatur quidem ut vel illo illum sunt veritatis
                  nulla.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
