import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeContextProvider } from "./context/ThemeContext";
import { router } from "./routes";
import { store } from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;
