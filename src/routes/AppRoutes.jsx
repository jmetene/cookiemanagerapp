import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CookieManagerRoutes } from "../cookiemanager/routes/CookieManagerRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      {/**Auth routes */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/**Cookie Manager Home Page */}
      <Route path="/*" element={<CookieManagerRoutes />} />
    </Routes>
  );
};
