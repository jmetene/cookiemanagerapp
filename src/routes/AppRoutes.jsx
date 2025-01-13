import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CookieManagerRoutes } from "../cookiemanager/routes/CookieManagerRoutes";
import { useAuthStore } from "../hooks";
import {
  DomainAddPage,
  DomainDetailsPage,
  DomainPage,
  UserPage,
} from "../domain/pages";
import { AdminPage } from "../admin/pages/AdminPage";
import { Backdrop, Box, CircularProgress } from "@mui/material";

// Esto se puede mover a un fichero externo
const AdminRoutes = () => (
  <Routes>
    <Route path="/admin" element={<AdminPage />} />
    <Route path="/*" element={<Navigate to="/admin" replace />} />
  </Routes>
);

// Esto se puede mover a un fichero externo (También pueden ser las rutas privadas)
const UserRoutes = () => (
  <Routes>
    <Route path="/" element={<DomainPage />} />
    <Route path="/domains/:id" element={<DomainDetailsPage />} />
    <Route path="/domains/add" element={<DomainAddPage />} />
    <Route path="/users/:name" element={<UserPage />} />
    <Route path="/*" element={<Navigate to="/" replace />} />
  </Routes>
);

// Esto se puede mover a un fichero externo para crear las rutas públicas
const PublicRoutes = () => (
  <Routes>
    <Route path="/auth/*" element={<AuthRoutes />} />
    <Route path="/*" element={<CookieManagerRoutes />} />
    <Route path="/*" element={<Navigate to="/auth/login" replace />} />
  </Routes>
);

export const AppRoutes = () => {
  const { status, user, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return (
      <Box>
        <Backdrop
          sx={(theme) => ({ color: "#bbf", zIndex: theme.zIndex.drawer + 1 })}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    );
  }

  if (status === "not-authenticated") {
    return <PublicRoutes />;
  }

  if (user.role === "admin") {
    return <AdminRoutes />;
  }

  if (user.role === "user") {
    return <UserRoutes />;
  }

  // Manejo de errores y fallback
  return <Navigate to="/auth/login" replace />;
};
