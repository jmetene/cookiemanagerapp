import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CookieManagerApp } from "./CookieManagerApp.jsx";
import "./styles.css";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/**Habilitamos react-redux */}
    <Provider store={store}>
      {/**Habilitamos react-router */}
      <BrowserRouter>
        <CookieManagerApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
