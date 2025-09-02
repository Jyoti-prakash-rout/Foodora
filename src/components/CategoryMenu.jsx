import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

import FoodData from "../data/FoodData";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <>
      <div className="mx-6">
        <h3 className="font-xl font-semibold">Find the best food</h3>
        <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth md:overflow-x-hidden lg:overflow-x-hidden">
          <button
            onClick={() => dispatch(setCategories("All"))}
            className={`px-3 py-2 hover:bg-green-500 hover:text-white bg-gray-200  rounded-md cursor-pointer ${
              selectedCategory === 'All' && "bg-green-500 text-white"
            } `}>
            All
          </button>
          {categories.map((category, index) => {
            return (
              <button
                onClick={() => dispatch(setCategories(category))}
                key={index}
                className="px-3 py-2 hover:bg-green-500 hover:text-white bg-gray-200  rounded-md cursor-pointer">
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
