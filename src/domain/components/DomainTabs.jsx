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
import dayjs from "dayjs";
import { useEffect } from "react";

export const DomainTabs = ({ user, domain, setActiveTab }) => {
  // Recuperamos el índice del tab desde localStorage, si existe
  const storedTabIndex = localStorage.getItem(`activeTabIndex-${domain.id}`);
  const [currentTabIndex, setCurrentTabIndex] = useState(
    storedTabIndex ? parseInt(storedTabIndex, 10) : 0
  );

  // Guardamos el índice del tab activo en el localStorage cuando cambia
  useEffect(() => {
    // Para persistir el Tab actual
    localStorage.setItem(`activeTabIndex-${domain.id}`, currentTabIndex);

    // Para controlar la visibilidad del botón Añadir Cookie
    setActiveTab(currentTabIndex);
  }, [currentTabIndex, setActiveTab, domain.id]);

  const fecha = dayjs(domain.lastCookieScan).format("DD/MM/YYYY");

  /**TODO: Comprobar si el dominio:
   *  - Tiene cookies cargadas para realizar ciertas acciones
   *  - Tiene historial de scaneos
   */
  const cards = [
    {
      id: 1,
      title: `${user.plan}`.toLocaleUpperCase(),
      description: "Descripción del plan básico",
      buttonTitle: "Actualizar plan",
    },
    {
      id: 2,
      title: `Total de cookies cargadas: ${domain.totalCookies} `,
      description:
        "Hay cookies que se instalan antes del consentimiento del usuario o aún no se han categorizado",
      buttonTitle: "Gestionar cookies",
    },
    {
      id: 3,
      title: `Último escaneo de cookies: ${fecha}`,
      description: `Se han encontrado ${domain.totalCookies} cookies en ${
        Math.floor(Math.random() * (12 - 3 + 1)) + 3
      } páginas`,
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

DomainTabs.propTypes = {
  user: PropTypes.object,
  domain: PropTypes.object,
  setActiveTab: PropTypes.func,
};
