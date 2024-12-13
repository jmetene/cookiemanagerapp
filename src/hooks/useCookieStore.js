import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import {
  onAddNewCookie,
  onDeleteCookie,
  onLoadCookies,
  onUpdateCookie,
} from "../store";
import Swal from "sweetalert2";

export const useCookieStore = () => {
  const dispatch = useDispatch();

  const { isLoadingCookies, cookies, errorMessage } = useSelector(
    (state) => state.cookies
  );
  const startSavingCookie = async ({
    domainId,
    name,
    type,
    description,
    provider,
    duration,
    sameSite,
    httpOnly,
    secure,
  }) => {
    try {
      const { data } = await cookieManagerApi.post(
        `/domains/${domainId}/cookie`,
        {
          name,
          type,
          description,
          provider,
          duration,
          sameSite,
          httpOnly,
          secure,
        }
      );
      dispatch(onAddNewCookie(data));
      // Devolvemos el dominio creado para usarlo en el componente si fuera necesario
      return data;
    } catch (error) {
      console.error("Error al crear la cookie:", error);
      const errorMsg = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al crear la cookie", errorMsg, "error");
    }
  };

  const startDeletingCookie = async (cookieId) => {
    try {
      await cookieManagerApi.delete(`/cookies/${cookieId}`);
      dispatch(onDeleteCookie(cookieId));
    } catch (error) {
      console.error("Error al eliminar la cookie:", error);
      const errorMsg = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al eliminar la cookie", errorMsg, "error");
    }
  };

  const startUpdatingCookie = async ({
    id,
    name,
    type,
    description,
    provider,
    duration,
    sameSite,
    httpOnly,
    secure,
  }) => {
    try {
      const { data } = await cookieManagerApi.put(`/cookies/${id}`, {
        name,
        type,
        description,
        provider,
        duration,
        sameSite,
        httpOnly,
        secure,
      });
      console.log(data);
      dispatch(onUpdateCookie(data));
    } catch (error) {
      console.error("Error al actualizar la cookie:", error);
      const errorMsg = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al actualizar la cookie", errorMsg, "error");
    }
  };

  const startLoadingCookies = async (cookieId) => {
    try {
      const { data } = await cookieManagerApi.get(
        `/domains/${cookieId}/cookies`
      );
      dispatch(onLoadCookies(data));
    } catch (error) {
      console.error("Error al cargar las cookie:", error);
      const errorMsg = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al actualizar la cookie", errorMsg, "error");
    }
  };

  return {
    // Propiedades
    isLoadingCookies,
    cookies,
    errorMessage,
    // Métodos
    startSavingCookie,
    startLoadingCookies,
    startDeletingCookie,
    startUpdatingCookie,
  };
};
