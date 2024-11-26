import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { domainSlice } from "./domain/domainSlice";

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
    domain: domainSlice.reducer,
  },
});
