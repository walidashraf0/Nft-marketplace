import React from "react";
import MainImage from "../../assets/mainunsplash.png";
import SecondImage from "../../assets/secondunsplash.png";
import ThirdImage from "../../assets/thirdunsplash.png";
import Avatar from "../../assets/avatar.png";
import MainButton from "../MainButton/MainButton";

const Profiles = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-6">
        <div className="p-10">
          <div className="flex items-center justify-between gap-4 max-md:flex-wrap max-md:justify-center max-md:gap-8">
            <div className="flex items-center justify-between gap-14">
              <div className="flex flex-col items-end justify-between gap-8">
                <div className="relative max-w-[250px]">
                  <img src={MainImage} alt="MainImage" />
                  <div className="absolute -bottom-5 -right-5 rounded-full border-white border-4">
                    <img src={Avatar} alt="Avatar" className="w-[50px]" />
                  </div>
                </div>
                <div className="relative max-w-[150px]">
                  <img src={SecondImage} alt="SecondImage" />
                  <div className="absolute -bottom-5 -right-5 rounded-full border-white border-4">
                    <img src={Avatar} alt="Avatar" className="w-[50px]" />
                  </div>
                </div>
              </div>
              <div className="relative max-w-[250px]">
                <img src={ThirdImage} alt="ThirdImage" />
                <div className="absolute -bottom-5 -right-5 rounded-full border-white border-4">
                  <img src={Avatar} alt="Avatar" className="w-[50px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-6 max-w-[400px]">
              <h2 className="font-extrabold text-3xl uppercase max-w-[250px]">
                Create and sell your NFTs
              </h2>
              <p className="text-sm text-[#636363]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisi ac phasellus placerat a pellentesque tellus sed
                egestas. Et tristique dictum sit tristique sed non. Lacinia
                lorem id consectetur pretium diam ut. Pellentesque eu sit
                blandit fringilla risus faucibus.
              </p>
              <MainButton text={"Sign Up Now"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profiles;
