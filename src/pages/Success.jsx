import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {loading ? (
          <PulseLoader color="#19e421" />
        ) : (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Order Successfull!
            </h2>
            <p>Your order has been successfully placed</p>
          </div>
        )}
      </div>
    </>
  );
};
 
export default Success;
