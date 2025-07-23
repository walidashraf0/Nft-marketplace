import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-2">
        <div className="p-10">
          <div className="flex items-center justify-between gap-14 max-md:flex-col max-md:gap-8 max-md:items-center max-md:justify-center">
            <div className="flex flex-col items-start justify-between gap-4 max-w-[400px] max-md:flex-1/2">
              <h1 className="text-xl font-extrabold uppercase">NFters</h1>
              <p className="text-[#565656] text-md max-w-[400px]">
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
              <div className="flex items-center justify-between gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-2xl"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 text-2xl"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 text-2xl"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
            <div className="flex-1 max-md:flex-1/2">
              <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-4">
                <div className="flex flex-col items-start justify-between gap-6 max-w-[250px]">
                  <h2 className="font-bold text-lg">Market Place</h2>
                  <ul className="flex-1">
                    <li>All NFTS</li>
                    <li>New</li>
                    <li>Art</li>
                    <li>Sports</li>
                    <li>Utitlity</li>
                    <li>Music</li>
                    <li>Domain Name</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-between gap-6 max-w-[250px]">
                  <h2 className="font-bold text-lg">My Account</h2>
                  <ul className="flex-1">
                    <li>Profile</li>
                    <li>Favourite</li>
                    <li>My Collections</li>
                    <li>Settings</li>
                  </ul>
                </div>
                <div className="flex flex-col items-start justify-between gap-6">
                  <h2 className="font-bold text-lg">Stay In The Loop</h2>
                  <p className="text-[#565656] text-md max-w-[300px] flex-1">
                    Join our mailing list to stay in the loop with our newest
                    feature releases, NFT drops, and tips and tricks for
                    navigating NFTs.
                  </p>
                  <div className="relative w-full">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3D00B7]"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#3D00B7] text-white px-4 py-2 rounded-full">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-[#F4F4F4] py-4 text-center">
        <span className="text-[#A4A4A4]">Copyright © 2025 Walid Ashraf</span>
      </div>
    </>
  );
};

export default Footer;
