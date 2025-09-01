import React, { useState } from "react";
import { X, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

import ItemCard from "./ItemCard";

const Cart = () => {
  const [activeCard, setActiveCard] = useState(true);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  return (
    <>
      <div
        className={`fixed right-0 top-0 sm:w-[30vw] w-full md:w-[25vw] lg:[20vw] h-full bg-white p-5 ${
          activeCard ? "translatete-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}>
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold  text-gray-800">My order</span>
          <X
            onClick={() => setActiveCard(!activeCard)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {cartItems.map((food) => (
          <ItemCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            img={food.img}
            qty={food.qty}
          />
        ))}

        <div className="absolute bottom-0 mb-5">
          <h3 className="font-semibold text-gray-800">Items:</h3>
          <h3 className="font-semibold text-gray-800">Total Amount:</h3>
          <hr className="" />
          <button className="px-2 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 cursor-pointer w-full mt-2">
            Checkout
          </button>
        </div>
      </div>
      <ShoppingCart
        onClick={() => setActiveCard(!activeCard)}
        className="fixed bottom-5 right-5 cursor-pointer"
      />
    </>
  );
};

export default Cart;
