import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <>
      <button className="text-center py-2 px-4 text-[#3D00B7] font-semibold border border-[#3D00B7] rounded-4xl cursor-pointer">
        {text}
      </button>
    </>
  );
};

export default SecondaryButton;
