import React from "react";
import { Plus, Minus, Trash } from "lucide-react";

const ItemCard = () => {
  return (
    <>
      <div className="flex flex-col gap-2 shadow-md rounded-lg p-2 mb-3">
        <img
          src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
          alt="Food Cart Image"
          className="w-[50px] h-[50px] "
        />
        <div>
          <h2 className="font-bold text-gray-800">Onion Pizza</h2>
          <div className="flex justify-between">
            <span>₹120</span>
            <div className="flex gap-2 absolute right-2">
              <Plus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none cursor-pointer rounded-md p-1 text-xl transition-all ease-linear" />
              <span>1</span>
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
