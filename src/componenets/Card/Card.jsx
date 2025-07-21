import React from "react";
import MainImage from "../../assets/mainunsplash.png";
import SecondImage from "../../assets/secondunsplash.png";
import ThirdImage from "../../assets/thirdunsplash.png";
import Avatar from "../../assets/avatar.png";

const Card = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-between max-w-[280px] bg-white rounded-lg shadow-lg p-2">
        <div className="w-full relative">
          <img src={MainImage} alt="MainImage" />
          <div className="absolute -bottom-3 left-4 border-white rounded-full border-2">
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="absolute -bottom-3 left-10 border-white rounded-full border-2">
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="absolute -bottom-3 left-16 border-white rounded-full border-2">
            <img src={Avatar} alt="Avatar" />
          </div>
          <div className="absolute -bottom-3 left-22 border-white rounded-full border-2">
            <img src={Avatar} alt="Avatar" />
          </div>
        </div>
        <div className="mt-2 p-2 flex flex-col items-start justify-between gap-2 w-full">
          <h2 className="font-bold text-lg">ArtCrypto</h2>
          <div className="flex items-center justify-between w-full border-b-1 border-[#F4F4F4] mb-4 pb-4">
            <span className="text-[#00AC4F] text-md">$ 0.25 ETH</span>
            <span className="text-[#838383] text-md">1 of 321</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="px-4 py-2 bg-[#F5F5F5] rounded-full text-[#5539A8]">
              3h 50m 2s left
            </span>
            <span className="text-sm text-[#4F33A3]">Place a bid</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
