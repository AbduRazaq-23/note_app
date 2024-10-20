import React from "react";

const Header = () => {
  return (
    <div className="w-full  flex justify-center items-center h-20 px-5 fixed top-0 bg-gray-900">
      <div className="w-full flex md:w-[30%]   px-2 p-1 rounded-md border border-slate-200">
        <input className="bg-slate-900 w-full focus:outline-none" type="text" />
        <button className="focus:outline-none">search</button>
      </div>
    </div>
  );
};

export default Header;
