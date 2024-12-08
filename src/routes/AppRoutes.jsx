import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CookieManagerRoutes } from "../cookiemanager/routes/CookieManagerRoutes";
import { useAuthStore } from "../hooks";
import { DomainDetailsPage, DomainPage } from "../domain/pages";
import UserAccoutPage from "../domain/pages/UserAccoutPage";

export const AppRoutes = () => {
  const { user, status, checkAuthToken } = useAuthStore();

  console.log({ AppRoutesUser: user });

  useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/*" element={<CookieManagerRoutes />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to={"/auth/login"} />} />
        </>
      ) : (
        <>
          <Route path="/" element={<DomainPage />} />
          <Route path="/domains/:id" element={<DomainDetailsPage />} />
          <Route path="/user/:name" element={<UserAccoutPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </>
      )}
    </Routes>
  );
};
