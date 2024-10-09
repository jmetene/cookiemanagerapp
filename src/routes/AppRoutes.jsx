import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CookieManagerRoutes } from "../cookiemanager/routes/CookieManagerRoutes";
import { DomainsRoutes } from "../domain/routes/DomainsRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      {/**Auth routes */}
      <Route path="/auth/*" element={<AuthRoutes />} />
      {/**Cookie Manager Home Page */}
      <Route path="/*" element={<CookieManagerRoutes />} />
      {/** Domain routes */}
      <Route path="/domains/*" element={<DomainsRoutes />} />
    </Routes>
  );
};
