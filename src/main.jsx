import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CookieManagerApp } from "./CookieManagerApp.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CookieManagerApp />
    </BrowserRouter>
  </StrictMode>
);
