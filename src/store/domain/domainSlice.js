import { createSlice } from "@reduxjs/toolkit";

export const domainSlice = createSlice({
  name: "domains",
  initialState: {
    isLoadingDomains: true, // Nos indica si están cargados los dominios o no
    isLoadingCookieBanner: true, // Nos indica si ya se ha cargado la info. del banner
    isLoadingCookieStatistics: true, // Nos indica si ya se han cargado las estadísticas
    domains: [],
    statistics: [], // Listado de estadísiticas del dominio
    banner: {},
    errorDomainMessage: undefined,
  },
  reducers: {
    onAddNewDomain: (state, { payload }) => {
      // Codigo para crear un nuevo dominio
      state.isLoadingDomains = false;
      state.domains.push(payload);

      // Si se produce un error en la edición del dominio
      state.errorDomainMessage = payload;
    },

    onUpdateDomain: (state, { payload }) => {
      // código para actualizar un dominio
      state.isLoadingDomains = false;

      const index = state.domains.findIndex(
        (domain) => domain.id === payload.id
      );

      if (index !== -1) {
        state.domains[index] = payload;
      }
    },

    onDeleteDomain: (state, { payload: domainId }) => {
      // código para eliminar un dominio
      state.isLoadingDomains = false;
      state.domains = state.domains.filter((domain) => domain.id !== domainId);
    },

    onLoadDomains: (state, { payload = [] }) => {
      // Codigo para cargar los eventos de la base de datos
      state.isLoadingDomains = false;
      state.domains = payload;
      // Si se produce un error en el listado de dominios
      state.errorDomainMessage = payload;

      // Si se añade un nuevo dominio
      payload.forEach((domain) => {
        const exists = state.domains.some(
          (dbDomain) => dbDomain.id === domain.id
        );
        if (!exists) {
          state.domains.push(domain);
        }
      });
    },

    onLoadDomainBanner: (state, { payload }) => {
      // state.isLoadingDomains = false;
      state.banner = payload;
      // state.errorDomainMessage = payload;
      state.isLoadingCookieBanner = false;
    },

    onLoadCookieStatistics: (state, { payload = [] }) => {
      state.isLoadingCookieStatistics = false;
      state.statistics = payload;

      // Si se añade una nuesva estadísitca
      payload.forEach((stat) => {
        const exists = state.statistics.some((dbStat) => dbStat.id === stat.id);
        if (!exists) {
          state.domains.push(stat);
        }
      });
    },

    // Acción para borrar los datos del dominio después del logout
    onClearDomains: (state) => {
      state.domains = [];
      state.banner = {};
      state.statistics = [];
      state.isLoadingDomains = true;
      state.errorDomainMessage = undefined;
      state.isLoadingCookieBanner = true;
      state.isLoadingCookieStatistics = true;
    },
  },
});

export const {
  onAddNewDomain,
  onUpdateDomain,
  onDeleteDomain,
  onLoadDomains,
  onGetDomainById,
  onClearDomains,
  onLoadDomainBanner,
  onLoadCookieStatistics,
} = domainSlice.actions;
