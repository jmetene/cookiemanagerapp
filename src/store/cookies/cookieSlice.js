import { createSlice } from "@reduxjs/toolkit";

export const cookieSlice = createSlice({
  name: "cookies",
  initialState: {
    isLoadingCookies: true, // Nos indica si están cargados los dominios o no
    cookies: [],
    errorCookieMessage: undefined,
  },
  reducers: {
    onAddNewCookie: (state, { payload }) => {
      state.isLoadingCookies = false;
      state.cookies = payload;
      state.cookies.push(payload);

      // Si se produce un error en la creación de la cookie
      state.errorCookieMessage = payload;
    },

    onUpdateCookie: (state, { payload }) => {
      state.isLoadingCookies = false;

      const index = state.cookies.findIndex(
        (cookie) => cookie.id === payload.id
      );

      if (index !== -1) {
        state.cookies[index] = payload;
      }
    },

    onDeleteCookie: (state, { payload: cookieId }) => {
      state.isLoadingCookies = false;

      // Devuelve un array de cookies filtrado en el que no aparece la
      // cookie con el identificador pasado
      state.cookies = state.cookies.filter((cookie) => cookie.id !== cookieId);
    },

    onLoadCookies: (state, { payload = [] }) => {
      state.isLoadingCookies = false;
      state.cookies = payload;
      state.errorCookieMessage = payload;

      // Si se añade una nueva cookie
      payload.forEach((cookie) => {
        const exists = state.cookies.some(
          (dbCookie) => dbCookie.id === cookie.id
        );
        if (!exists) {
          state.cookies.push(cookie);
        }
      });
    },

    // Acción para borrar todas las cookies después del logout
    onClearCookies: (state) => {
      state.cookies = [];
      state.isLoadingCookies = true;
      state.errorCookieMessage = undefined;
    },
  },
});

export const {
  onAddNewCookie,
  onUpdateCookie,
  onDeleteCookie,
  onLoadCookies,
  onClearCookies,
} = cookieSlice.actions;
