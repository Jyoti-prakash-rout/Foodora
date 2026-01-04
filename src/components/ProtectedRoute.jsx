import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const ProtectedRoute = ({ children }) => {
  const user = useAuth();

  // const cartItems = useSelector((state) => state.cart.cart);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;

  // return cartItems.length > 0 ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
