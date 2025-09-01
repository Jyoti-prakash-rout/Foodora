import React from "react";
import { Plus, Minus, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
const ItemCard = ({ key, id, name, price, img, qty }) => {
  return (
    <>
      <div className="flex flex-col gap-2 shadow-md rounded-lg p-2 mb-3">
        <img src={img} className="w-[50px] h-[50px] " />
        <div>
          <h2 className="font-bold text-gray-800"> {name} </h2>
          <div className="flex justify-between">
            <span>₹ {price} </span>
            <div className="flex gap-2 absolute right-2">
              <Plus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none cursor-pointer rounded-md p-1 text-xl transition-all ease-linear" />
              <span> {qty} </span>
              <Minus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none cursor-pointer rounded-md p-1 text-xl transition-all ease-linear" />
              <Trash className="text-red-500 hover:text-red-600 cursor-pointer" />
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default ItemCard;
