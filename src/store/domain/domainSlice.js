import { createSlice } from "@reduxjs/toolkit";

export const domainSlice = createSlice({
  name: "domain",
  initialState: {
    isLoadingDomain: true,
    domains: [],
  },
  reducers: {
    onAddNewDomain: (state, { payload }) => {
      // Codigo para crear un nuevo dominio
    },

    onUpdateDomain: (state, { payload }) => {
      // código para actualizar un dominio
    },

    onDeleteDomain: (state, { payload }) => {
      // código para eliminar un dominio
    },

    onLoadDomains: (state, { payload }) => {
      // Codigo para cargar los eventos de la base de datos
    },
  },
});

export const { onAddNewDomain, onUpdateDomain, onDeleteDomain, onLoadDomians } =
  domainSlice.actions;
