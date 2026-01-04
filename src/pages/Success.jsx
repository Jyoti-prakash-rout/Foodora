import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { useDispatch } from "react-redux";

import { clearCart } from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

const Success = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {loading ? (
          <PulseLoader color="#19e421" />
        ) : (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Order Successful 🎉
            </h2>
            <p>Your order has been successfully placed</p>
            <p>Order ID: #FOOD{Date.now()}</p>

            <div className="flex justify-center">
              <Link
                to="/"
                className="text-green-500 font-bold mt-10 text-center">
                Back to home 
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Success;
