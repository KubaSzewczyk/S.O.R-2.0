import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context) {
    return context;
  }
  throw new Error("Component should be placed inside ThemeContextProvider");
};
