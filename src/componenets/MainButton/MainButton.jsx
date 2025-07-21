import React from "react";

const MainButton = ({ text }) => {
  return (
    <button className="w-fit text-center bg-[#3D00B7] py-2 px-6 text-white rounded-4xl cursor-pointer">
      {text}
    </button>
  );
};

export default MainButton;
