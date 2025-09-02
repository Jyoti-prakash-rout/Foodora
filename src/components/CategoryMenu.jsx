import React from "react";

const CategoryMenu = () => {


  
  return (
    <>
      <div className="mx-6">
        <h3 className="font-xl font-semibold">Find the best food</h3>
        <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth md:overflow-x-hidden lg:overflow-x-hidden">
          <button className="px-3 py-2 hover:bg-green-500 hover:text-white bg-gray-200  rounded-md cursor-pointer">
            All
          </button>
          <button className="px-3 py-2 hover:bg-green-500 hover:text-white bg-gray-200 rounded-md cursor-pointer">
            Breakfast  
          </button>
          <button className="px-3 py-2 hover:bg-green-500 hover:text-white bg-gray-200 rounded-md cursor-pointer">
            Lunch
          </button>
          <button className="px-3 py-2 hover:bg-green-500 hover:text-white bg-gray-200 rounded-md  cursor-pointer">
            Dinner
          </button>
          <button className="px-3 py-2 hover:bg-green-500 hover:text-white bg-gray-200 rounded-md cursor-pointer">
            Snacks
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
