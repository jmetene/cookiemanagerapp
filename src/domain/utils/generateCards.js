import dayjs from "dayjs";

/**
 * Genera las tarjetas basadas en los datos del dominio y el usuario.
 * @param {Object} domain - Objeto que representa el dominio.
 * @param {Object} banner - Objeto que representa el banner.
 * @param {Object} user - Objeto que representa al usuario.
 * @returns {Array} Lista de tarjetas para renderizar.
 */
export const generateCards = (domain = {}, banner = {}, user = {}) => {
  const { totalCookies = 0, lastCookieScan = null } = domain;
  const { plan = "Básico" } = user;
  const lastScanDate = lastCookieScan
    ? dayjs(lastCookieScan).format("DD/MM/YYYY")
    : null;

  return [
    {
      id: 1,
      title: plan.toLocaleUpperCase(),
      description: "Descripción del plan básico",
      buttonTitle: "Actualizar plan",
    },
    {
      id: 2,
      title: `Total de cookies cargadas: ${totalCookies}`,
      description:
        totalCookies > 0
          ? "Hay cookies que se instalan antes del consentimiento del usuario o aún no se han categorizado."
          : "Aún no se han cargado cookies.",
      buttonTitle: totalCookies > 0 ? "Gestionar cookies" : null,
    },
    {
      id: 3,
      title: lastScanDate
        ? `Último escaneo de cookies: ${lastScanDate}`
        : "Todavía no se han cargado cookies",
      description: lastScanDate
        ? `Se han encontrado ${totalCookies} cookies en 5 páginas.` // Número fijo en lugar de aleatorio.
        : "Para cargar cookies, pulsa sobre el botón Escanear 👇🏼",
      buttonTitle: "Escanear",
    },
    {
      id: 4,
      title:
        totalCookies > 0 ? "Borrar dominio" : "Borrar dominio (sin cookies)",
      description:
        totalCookies > 0
          ? "Esto borrará tu dominio, incluyendo cualquier personalización y registro de consentimiento. Tenga en cuenta que esta acción NO se podrá revertir."
          : "Esto borrará tu dominio incluso si no tiene cookies cargadas. Tenga en cuenta que esta acción NO se podrá revertir.",
      buttonTitle: "Borrar dominio",
    },
    {
      id: 5,
      title: "Información banner",
      description:
        banner.title === undefined
          ? "Todavía no tienes un banner creado, haz click en el btón para crear un banner"
          : banner.cookieDeclaration,
      buttonTitle: banner === "" ? "Crear banner" : "Configurar banner",
    },
  ];
};
