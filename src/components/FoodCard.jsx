import React from "react";
import { Star } from "lucide-react";

const FoodCard = ({ id, name, price, img, rating, desc }) => {
  return (
    <div className="font-bold w-[250px] bg-white p-5 flex-col gap-2 rounded-lg">
      <img
        src={img}
        alt="Food Image"
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-700 ease-in-out"
      />
      <div className="text-sm flex justify-between mb-4">
        <h2> {name} </h2>
        <span className="text-green-500">₹{price} </span>
      </div>
      <p className="text-sm font-normal mb-4">{desc.slice(0,50)}... </p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <Star className="text-yellow-500 mr-2" /> {rating}
        </span>
        <button className="px-2 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 cursor-pointer ">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
