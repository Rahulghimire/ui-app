import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
const TopBar = () => {
  return (
    <div className="bg-zinc-800">
      <div className="h-full mx-12">
        <div className="flex text-white">
          <div className="w-1/3 bg-slate-500 flex px-2">
            <RiAccountCircleLine size={30} className="my-auto" />
            <span className="font-bold p-2">
              Mess ages
              <span className="block text-xs">9860600405</span>
            </span>
          </div>
          <div className="w-1/3 bg-slate-600 flex px-2">
            <RiAccountCircleLine size={30} className="my-auto" />
            <span className="font-bold p-2">
              Mess ages
              <span className="block text-xs">9860600405</span>
            </span>
          </div>
          <div className="w-1/3 bg-slate-800 flex px-2">
            <RiAccountCircleLine size={30} className="my-auto" />
            <button className="font-bold mx-2 p-2 my-auto px-4 py-2 text-white bg-gray-500 rounded-md shadow hover:bg-gray-600">
              Area Do Cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
