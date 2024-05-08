import { RouterProvider } from "react-router-dom";

import { ThemeContextProvider } from "./context/ThemeContext";
import { router } from "./routes";

import "./App.css";

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
