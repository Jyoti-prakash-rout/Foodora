import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <>
      <nav className="flex flex-col justify-between md:flex-row lg:flex-row py-3 mx-6 mb-10 ">
        <div className="">
          <h3 className="text-xl font-bold text-green-600">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-2xl font-bold text-green-700">Foodora Foods</h1>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search here"
            autoComplete="off"
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="p-3 border-1 mt-4 border-green-400 text-sm rounded-lg w-full lg:[20vw]"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
