import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { createContext, useState } from "react";
import Header from "../components/Header/Header";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const Routers = () => {
  const [theme, setTheme] = useState("light");

  // Whenever we want to change the theme the function will be call
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <ReactSwitch onChange={toggleTheme} checked={theme} className="react__switch" />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default Routers;
