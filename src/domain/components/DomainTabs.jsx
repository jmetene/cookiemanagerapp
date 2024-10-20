import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import {
  ImplementationPage,
  SettingPage,
  ScannerCookiePage,
  CookieListPage,
  StatisticsCookiesPage,
} from "../pages";
import { DomainDescriptionTabView } from "../views";

const cards = [
  {
    id: 1,
    title: "Plan básico",
    description: "Descripción del plan básico",
    buttonTitle: "Actualizar plan",
  },
  {
    id: 2,
    title: "107 Cookies",
    description:
      "66 cookies se instalan antes del consentimiento del usuario o aún no se han categorizado",
    buttonTitle: "Gestionar cookies",
  },
  {
    id: 3,
    title: "Último escaneo de cookies:",
    description: "107 cookies encontradas en 50 páginas",
    buttonTitle: "Escanear",
  },
  {
    id: 4,
    title: "Borrar dominio",
    description:
      "Esto borrará tu dominio incluyendo cualquier personalidzaión y registro de consentimiento. Tenga en cuenta que esta acción NO se podrá revertir",
    buttonTitle: "Borrar dominio",
  },
];

export const DomainTabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleChange = (event, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={currentTabIndex} onChange={handleChange} centered>
        <Tab label="Descripción general" />
        <Tab label="Implementación" />
        <Tab label="Ajustes" />
        <Tab label="Escaneo" />
        <Tab label="Cookies" />
        <Tab label="Informes" />
      </Tabs>
      {currentTabIndex === 0 && <DomainDescriptionTabView cards={cards} />}
      {currentTabIndex === 1 && <ImplementationPage />}
      {currentTabIndex === 2 && <SettingPage />}
      {currentTabIndex === 3 && <ScannerCookiePage />}
      {currentTabIndex === 4 && <CookieListPage />}
      {currentTabIndex === 5 && <StatisticsCookiesPage />}
    </Box>
  );
};
