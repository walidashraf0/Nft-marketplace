import React from "react";
import styles from "./hero.module.css";
import MainButton from "../MainButton/MAinButton";
import MainImage from "../../assets/mainunsplash.png";
import SecondImage from "../../assets/secondunsplash.png";
import ThirdImage from "../../assets/thirdunsplash.png";
import Avatar from "../../assets/avatar.png";

const Hero = () => {
  return (
    <section className="container m-auto px-4 py-2">
      <div className="flex items-center justify-between p-10">
        <div className="flex flex-col justify-between gap-8">
          <h1 className="uppercase font-extrabold text-6xl w-[850px]">
            Discover, and collect Digital Art NFTs
          </h1>
          <p className="text-gray-600 w-[450px] mb-6 text-lg">
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <MainButton text={"Explore Now"} />
          <div className="w-[300px] flex items-center justify-between gap-4">
            <article>
              <h2 className="font-extrabold text-3xl">98K+</h2>
              <p className="text-gray-600">Artwork</p>
            </article>
            <article>
              <h2 className="font-extrabold text-3xl">12K+</h2>
              <p className="text-gray-600">Auction</p>
            </article>
            <article>
              <h2 className="font-extrabold text-3xl">15K+</h2>
              <p className="text-gray-600">Artist</p>
            </article>
          </div>
        </div>
        <div className="relative w-[500px] h-[500px]">
          <div className="absolute top-0 right-30 z-30">
            <div className="relative">
              <img
                src={MainImage}
                className="w-full h-[400px]"
                alt="MainImage"
              />
              <div className="absolute top-6">
                <div className="p-2 ml-4">
                    <h3 className="text-xl text-white font-bold">Abstr Gradient NFT</h3>
                    <article className="flex items-center gap-2 mt-2">
                        <img src={Avatar} alt="Avatar" />
                        <span className="text-white text-lg font-bold">Arkhan17</span>
                    </article>
                </div>
              </div>
              <div className="absolute bottom-4 left-5 w-[320px] text-white">
                <div className="p-4 rounded-lg mx-auto backdrop-blur-lg bg-white/30">
                    <div className="flex items-center justify-between">
                        <article>
                            <span className="text-md">Current Bid</span>
                            <h4 className="text-xl font-bold">$ 0.25 ETH</h4>
                        </article>
                        <article>
                            <span className="text-md">Ends in</span>
                            <h4 className="text-xl font-bold">12h 43m 42s</h4>
                        </article>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-6 right-22 z-20">
            <img
              src={SecondImage}
              className="w-[300px] h-[360px]"
              alt="SecondImage"
            />
          </div>
          <div className="absolute top-10 right-16 z-10">
            <img src={ThirdImage} className="h-[320px]" alt="ThirdImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
