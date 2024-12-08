import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CookieManagerRoutes } from "../cookiemanager/routes/CookieManagerRoutes";
import { useAuthStore } from "../hooks";
import { DomainAddPage, DomainDetailsPage, DomainPage } from "../domain/pages";

export const AppRoutes = () => {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    // TODO: Crear un componente para mostar el estado de carga de los dominios
    return <h3>Cargando...</h3>;
  }

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
          <Route path="/domains/add" element={<DomainAddPage />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </>
      )}
    </Routes>
  );
};
