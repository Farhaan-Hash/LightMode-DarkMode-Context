import React, {createContext, useContext, useState} from "react";

const Context = createContext();

export const ThemeContext = ({children}) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Context.Provider value={{theme, toggleTheme}}>{children}</Context.Provider>
  );
};

export const useThemeContext = () => useContext(Context);
