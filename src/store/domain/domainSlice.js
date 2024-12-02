import { createSlice } from "@reduxjs/toolkit";

export const domainSlice = createSlice({
  name: "domain",
  initialState: {
    isLoadingDomains: true, // Nos indica si están cargados los dominios o no
    domains: [],
    cookies: [],
    errorDomainMessage: undefined,
  },
  reducers: {
    onAddNewDomain: (state, { payload }) => {
      // Codigo para crear un nuevo dominio
      state.isLoadingDomains = false;
      state.domains = payload;
      // Si se produce un error en la edición de un dominio
      state.errorDomainMessage = payload;
    },

    onUpdateDomain: (state, { payload }) => {
      // código para actualizar un dominio
      state.isLoadingDomains = false;
      state.domains = payload;
      // Si se produce un error en la creación de un dominio
      state.errorDomainMessage = payload;
    },

    onDeleteDomain: (state, { payload }) => {
      // código para eliminar un dominio
      state.isLoadingDomains = false;
      state.domains = payload;
      // Si se produce un error en el borrado de un dominio
      state.errorDomainMessage = payload;
    },

    onLoadDomains: (state, { payload = [] }) => {
      // Codigo para cargar los eventos de la base de datos
      state.isLoadingDomains = false;
      state.domains = payload;
      console.log("DomainSlice::OnLoadDomains: dominios cargados", payload);
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
  },
});

export const { onAddNewDomain, onUpdateDomain, onDeleteDomain, onLoadDomains } =
  domainSlice.actions;
