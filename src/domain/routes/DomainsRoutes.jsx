import { Navigate, Route, Routes } from "react-router-dom";
import { DomainAddPage, DomainDetailsPage, DomainPage } from "../pages";

export const DomainsRoutes = () => {
  return (
    <Routes>
      {/**<Route path="/" element={<DomainPage />} /> */}

      <Route path="" element={<DomainPage />} />
      <Route exact path="/domains/details" element={<DomainDetailsPage />} />
      <Route path="/add" element={<DomainAddPage />} />

      {/* <Route path="/*" element={<Navigate to="/domains" />} /> */}
    </Routes>
  );
};
