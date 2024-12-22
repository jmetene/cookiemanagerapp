import PropTypes from "prop-types";
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
import { useEffect } from "react";

export const DomainTabs = ({ user, domain, setActiveTab }) => {
  // Recuperamos el índice del tab desde el localStorage, si existe
  const storedTabIndex = localStorage.getItem(`activeTabIndex-${domain.id}`);
  const [currentTabIndex, setCurrentTabIndex] = useState(
    storedTabIndex ? parseInt(storedTabIndex, 10) : 0
  );

  // Guardamos el índice del tab activo en el localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem(`activeTabIndex-${domain.id}`, currentTabIndex);
    // Para controlar la visibilidad del botón Añadir Cookie
    setActiveTab(currentTabIndex);
  }, [currentTabIndex, setActiveTab, domain.id]);

  const handleChange = (event, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={currentTabIndex} onChange={handleChange} centered>
        <Tab label="Descripción general" />
        <Tab label="Implementación" />
        <Tab label="Ajustes Banner" />
        <Tab label="Escaneo" />
        <Tab label="Cookies" />
        <Tab label="Informes" />
      </Tabs>
      {currentTabIndex === 0 && (
        <DomainDescriptionTabView domain={domain} user={user} />
      )}
      {currentTabIndex === 1 && <ImplementationPage />}
      {currentTabIndex === 2 && <SettingPage />}
      {currentTabIndex === 3 && <ScannerCookiePage />}
      {currentTabIndex === 4 && <CookieListPage />}
      {currentTabIndex === 5 && <StatisticsCookiesPage domain={domain} />}
    </Box>
  );
};

DomainTabs.propTypes = {
  user: PropTypes.object,
  domain: PropTypes.object,
  setActiveTab: PropTypes.func,
};
