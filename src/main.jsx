import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CookieManagerApp } from "./CookieManagerApp.jsx";
import "./styles.css";
import { persistor, store } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
// import persistStore from "redux-persist/es/persistStore";

// const persistor = persistStore(store);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/**Habilitamos react-redux */}

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/**Habilitamos react-router */}
        <BrowserRouter>
          <CookieManagerApp />
        </BrowserRouter>{" "}
      </PersistGate>
    </Provider>
  </StrictMode>
);
