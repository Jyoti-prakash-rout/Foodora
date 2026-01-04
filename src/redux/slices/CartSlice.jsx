import { createSlice } from "@reduxjs/toolkit";

const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: storedCart, // ✅ USE stored cart
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart)); // ✅ persist
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);

      localStorage.setItem("cartItems", JSON.stringify(state.cart)); // ✅ persist
    },

    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cart)); // ✅ persist
    },

    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cart)); // ✅ persist
    },

    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cartItems"); // ✅ clear only after order
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
