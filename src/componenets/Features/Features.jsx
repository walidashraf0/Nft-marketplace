import React from "react";
import MainImage from "../../assets/mainunsplash.png";
import SecondImage from "../../assets/secondunsplash.png";
import ThirdImage from "../../assets/thirdunsplash.png";
import Avatar from "../../assets/avatar.png";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Features = () => {
  return (
    <>
      <div className="bg-[#D9E0EC]/20">
        <div className="container mx-auto px-4 py-2 my-8">
          <div className="p-10">
            <h1 className="font-extrabold text-2xl uppercase">
              Collection Featured NFTs
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10">
              <div className="flex flex-col items-start justify-between gap-2 max-w-[340px]">
                <div className="flex items-center justify-between gap-2">
                  <div className="max-w-[250px]">
                    <img src={MainImage} alt="MainImage" />
                  </div>
                  <div className="flex flex-col items-center justify-between gap-2">
                    <div className="max-w-[78px]">
                      <img src={MainImage} alt="MainImage" />
                    </div>
                    <div className="max-w-[78px]">
                      <img src={SecondImage} alt="SecondImage" />
                    </div>
                    <div className="max-w-[78px]">
                      <img src={ThirdImage} alt="ThirdImage" />
                    </div>
                  </div>
                </div>
                <h2 className="font-bold">Amazing Collection</h2>
                <div className="flex items-center justify-between gap-10 w-full max-w-[340px]">
                  <article className="flex items-center justify-between gap-2">
                    <img src={Avatar} alt="Avatar" />
                    <span>by Arkhan</span>
                  </article>
                  <SecondaryButton text={"Total 54 Items"} />
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-2 max-w-[340px]">
                <div className="flex items-center justify-between gap-2">
                  <div className="max-w-[250px]">
                    <img src={MainImage} alt="MainImage" />
                  </div>
                  <div className="flex flex-col items-center justify-between gap-2">
                    <div className="max-w-[78px]">
                      <img src={MainImage} alt="MainImage" />
                    </div>
                    <div className="max-w-[78px]">
                      <img src={SecondImage} alt="SecondImage" />
                    </div>
                    <div className="max-w-[78px]">
                      <img src={ThirdImage} alt="ThirdImage" />
                    </div>
                  </div>
                </div>
                <h2 className="font-bold">Amazing Collection</h2>
                <div className="flex items-center justify-between gap-10 w-full max-w-[340px]">
                  <article className="flex items-center justify-between gap-2">
                    <img src={Avatar} alt="Avatar" />
                    <span>by Arkhan</span>
                  </article>
                  <SecondaryButton text={"Total 54 Items"} />
                </div>
              </div>
              <div className="flex flex-col items-start justify-between gap-2 max-w-[340px]">
                <div className="flex items-center justify-between gap-2">
                  <div className="max-w-[250px]">
                    <img src={MainImage} alt="MainImage" />
                  </div>
                  <div className="flex flex-col items-center justify-between gap-2">
                    <div className="max-w-[78px]">
                      <img src={MainImage} alt="MainImage" />
                    </div>
                    <div className="max-w-[78px]">
                      <img src={SecondImage} alt="SecondImage" />
                    </div>
                    <div className="max-w-[78px]">
                      <img src={ThirdImage} alt="ThirdImage" />
                    </div>
                  </div>
                </div>
                <h2 className="font-bold">Amazing Collection</h2>
                <div className="flex items-center justify-between gap-10 w-full max-w-[340px]">
                  <article className="flex items-center justify-between gap-2">
                    <img src={Avatar} alt="Avatar" />
                    <span>by Arkhan</span>
                  </article>
                  <SecondaryButton text={"Total 54 Items"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
