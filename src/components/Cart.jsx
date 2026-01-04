import React, { useState } from "react";
import { X, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

import { useMemo } from "react";

import ItemCard from "./ItemCard";

const Cart = () => {
  const { user } = useAuth();

  const [activeCard, setActiveCard] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty * item.price, 0),
    [cartItems]
  );

  {
    if (cartItems.length < 0) {
      return (
        <div>
          <h2>Your Cart is Empty 🛒</h2>
        </div>
      );
    }
  }

  // return cartItems.length > 0 ? element : <Navigate to="/" />;

  const navigate = useNavigate();

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
        {cartItems.length > 0 ? (
          cartItems.map((food) => (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          ))
        ) : (
          <h2 className="mt-50 text-center text-xl font-bold text-gray-800">
            Your Cart is Empty 🛒
          </h2>
        )}

        <div className="absolute bottom-0 mb-5">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: {totalPrice}{" "}
          </h3>
          <hr className="" />
          <button
            disabled={cartItems.length === 0}
            className={`px-2 py-1 rounded-full w-full mt-2 transition
    ${
      cartItems.length === 0
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "bg-green-500 text-white hover:bg-green-600 cursor-pointer"
    }`}
            onClick={() => {
              if (!user) {
                navigate("/login");
              } else {
                navigate("/success");
              }
            }}>
            Checkout
          </button>
        </div>
      </div>
      <ShoppingCart
        onClick={() => setActiveCard(!activeCard)}
        className={`fixed bottom-5 right-5 cursor-pointer ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        } `}
      />
    </>
  );
};

export default Cart;
