import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<Error />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
