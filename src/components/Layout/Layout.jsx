import React, { createContext, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

export const ThemeContent = createContext(null);

const Layout = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContent.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Header toggleTheme={toggleTheme} theme={theme === "light"}/>
          <Routers />
          <Footer />
        </div>
      </ThemeContent.Provider>
    </>
  );
};

export default Layout;
