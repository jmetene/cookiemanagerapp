import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import {
  onAddNewDomain,
  onDeleteDomain,
  onLoadDomains,
  onUpdateDomain,
} from "../store";
import Swal from "sweetalert2";

export const useDomainStore = () => {
  const dispatch = useDispatch();

  const { isLoadingDomains, domains, errorMessage } = useSelector(
    (state) => state.domain
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
      });
      console.log(data);
      dispatch(onAddNewDomain);
    } catch (error) {
      console.log(error);
      Swal.fire("Error al crear el dominio", error.response.data.msg, "error");
    }
  };

  const startDeletingDomain = async (domain) => {
    try {
      const { data } = await cookieManagerApi.delete(`/domains/${domain.id}`);
      console.log(data);
      dispatch(onDeleteDomain);
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  const startUpdatingDomain = async (domain) => {
    try {
      const { data } = await cookieManagerApi.put(`/domains/${domain.id}`);
      console.log(data);
      dispatch(onUpdateDomain);
    } catch (error) {
      console.log(error);
      Swal.fire("Error al actualizar", error.response.data.msg, "error");
    }
  };

  const startLoadingDomains = async () => {
    try {
      const { data } = await cookieManagerApi.get("/domains");
      // console.log(data);
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
  };
};
