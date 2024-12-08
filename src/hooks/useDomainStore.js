import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import {
  onAddNewDomain,
  onDeleteDomain,
  onGetDomainById,
  onLoadDomains,
  onUpdateDomain,
} from "../store";
import Swal from "sweetalert2";

export const useDomainStore = () => {
  const dispatch = useDispatch();

  const { isLoadingDomains, domains, errorMessage } = useSelector(
    (state) => state.domains
  );

  const startSavingDomain = async ({
    nombre,
    descripcion,
    estado,
    propietario,
    contactoEmail,
  }) => {
    try {
      const { data } = await cookieManagerApi.post("/domains", {
        nombre,
        descripcion,
        estado,
        propietario,
        contactoEmail,
        paisOrigen: null,
      });
      console.log(data);

      // Despachamos el dominio recién creado
      dispatch(onAddNewDomain(data));

      // Devolvemos el dominio creado para usarlo en el componente si fuera necesario
      return data;
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al crear el dominio", errorMessage, "error");

      // Retornamos null en caso de error.
      return null;
    }
  };

  const startDeletingDomain = async (domainId) => {
    try {
      await cookieManagerApi.delete(`/domains/${domainId}`);

      // Despacha la acción para eliminar el dominio del estado local
      dispatch(onDeleteDomain(domainId));
    } catch (error) {
      console.error("Error al eliminar el dominio:", error);
      const errorMsg = error.response?.data?.msg || "Error desconocido";
      Swal.fire("Error al eliminar", errorMsg, "error");
    }
  };

  const startUpdatingDomain = async ({
    id,
    nombre,
    descripcion,
    estado,
    propietario,
    contactoEmail,
  }) => {
    try {
      const { data } = await cookieManagerApi.put(`/domains/${id}`, {
        nombre,
        descripcion,
        estado,
        propietario,
        contactoEmail,
      });
      console.log(data);
      dispatch(onUpdateDomain(data));
    } catch (error) {
      console.log(error);
      Swal.fire("Error al actualizar", error.response.data.msg, "error");
    }
  };

  const startLoadingDomains = async () => {
    try {
      const { data } = await cookieManagerApi.get("/domains");
      console.log({ domains: data });
      dispatch(onLoadDomains(data));
    } catch (error) {
      console.log("Error en la carga de dominios");
      console.log(error);
      Swal.fire(
        "Error al listar los dominios",
        error.response.data.msg,
        "error"
      );
    }
  };

  const starGettingDomainById = async (id) => {
    try {
      const { data } = await cookieManagerApi.get(`/domains/${id}`);
      console.log(data);
      dispatch(onGetDomainById(data));
    } catch (error) {
      console.log("Error al obtener los datos del dominio");
      console.log(error);
      Swal.fire(
        "Error al obtener los datos del dominio",
        error.response.data.msg,
        "error"
      );
    }
  };

  return {
    // Propiedades
    isLoadingDomains,
    domains,
    errorMessage,
    // Métodos
    startSavingDomain,
    startLoadingDomains,
    startDeletingDomain,
    startUpdatingDomain,
    starGettingDomainById,
  };
};
