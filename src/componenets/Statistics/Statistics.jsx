import React from "react";
import MainImage from "../../assets/mainunsplash.png";
import SecondImage from "../../assets/secondunsplash.png";
import ThirdImage from "../../assets/thirdunsplash.png";
import Avatar from "../../assets/avatar.png";
import MainButton from "../MainButton/MAinButton";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Statistics = () => {
  return (
    <>
      <section className="container m-auto px-4 py-2 my-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-10">
          <div className="flex flex-col items-center justify-between gap-5 w-full max-w-[310px]">
            <div className="max-w-[400px]">
              <img src={ThirdImage} alt="ThirdImage" />
            </div>
            <div className="flex items-center justify-between gap-6 w-full max-w-[310px]">
              <div className="flex items-center justify-between gap-2">
                <img src={Avatar} alt="Avatar" />
                <article>
                  <h2 className="font-bold">The Futr Abstr</h2>
                  <span>10 in the stock</span>
                </article>
              </div>
              <div>
                <article>
                  <h2>Highest Bid</h2>
                  <span>$ 0.25 ETH</span>
                </article>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-5 w-full max-w-[400px]">
            <div className="flex items-center justify-between gap-4">
              <div className="max-w-[100px]">
                <img src={MainImage} alt="ThirdImage" />
              </div>
              <div className="flex flex-col items-start justify-between gap-2">
                <h2 className="font-bold">The Futr Abstr</h2>
                <div className="flex items-center justify-between gap-2">
                  <img src={Avatar} alt="Avatar" />
                  <span className="btn border p-1 rounded text-[#00AC4F] border-[#00AC4F]">
                    $ 0.25 ETH
                  </span>
                  <span className="text-[#757575]">1 of 8</span>
                </div>
                <MainButton text={"Place a bid"} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="max-w-[100px]">
                <img src={SecondImage} alt="ThirdImage" />
              </div>
              <div className="flex flex-col items-start justify-between gap-2">
                <h2 className="font-bold">The Futr Abstr</h2>
                <div className="flex items-center justify-between gap-2">
                  <img src={Avatar} alt="Avatar" />
                  <span className="btn border p-1 rounded text-[#00AC4F] border-[#00AC4F]">
                    $ 0.25 ETH
                  </span>
                  <span className="text-[#757575]">1 of 8</span>
                </div>
                <SecondaryButton text={"Place a bid"} />
              </div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="max-w-[100px]">
                <img src={ThirdImage} alt="ThirdImage" />
              </div>
              <div className="flex flex-col items-start justify-between gap-2">
                <h2 className="font-bold">The Futr Abstr</h2>
                <div className="flex items-center justify-between gap-2">
                  <img src={Avatar} alt="Avatar" />
                  <span className="btn border p-1 rounded text-[#00AC4F] border-[#00AC4F]">
                    $ 0.25 ETH
                  </span>
                  <span className="text-[#757575]">1 of 8</span>
                </div>
                <SecondaryButton text={"Place a bid"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 max-w-[250px]">
            <div>
              <h2 className="font-extrabold text-xl uppercase">
                Top collections Over
              </h2>
              <p className="text-md font-medium">Last 7 Days</p>
            </div>
            <div className="mt-4">
              <div className="flex flex-col items-center justify-between gap-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold">1</span>
                  <div>
                    <img src={Avatar} alt="Avatar" />
                  </div>
                  <article>
                    <h2 className="font-semibold">CryptoFunks</h2>
                    <span className="font-semibold">$ 19,769.39</span>
                  </article>
                  <span className="text-[#FF002E]">+26.52%</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold">2</span>
                  <div>
                    <img src={Avatar} alt="Avatar" />
                  </div>
                  <article>
                    <h2 className="font-semibold">CryptoFunks</h2>
                    <span className="font-semibold">$ 19,769.39</span>
                  </article>
                  <span className="text-[#14C8B0]">+26.52%</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold">3</span>
                  <div>
                    <img src={Avatar} alt="Avatar" />
                  </div>
                  <article>
                    <h2 className="font-semibold">CryptoFunks</h2>
                    <span className="font-semibold">$ 19,769.39</span>
                  </article>
                  <span className="text-[#FF002E]">+26.52%</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold">4</span>
                  <div>
                    <img src={Avatar} alt="Avatar" />
                  </div>
                  <article>
                    <h2 className="font-semibold">CryptoFunks</h2>
                    <span className="font-semibold">$ 19,769.39</span>
                  </article>
                  <span className="text-[#14C8B0]">+26.52%</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold">5</span>
                  <div>
                    <img src={Avatar} alt="Avatar" />
                  </div>
                  <article>
                    <h2 className="font-semibold">CryptoFunks</h2>
                    <span className="font-semibold">$ 19,769.39</span>
                  </article>
                  <span className="text-[#FF002E]">+26.52%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
