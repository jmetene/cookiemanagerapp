import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import { onDeleteDomain } from "../store";
import Swal from "sweetalert2";

export const useDomainStore = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { domains } = useSelector((state) => state.calendar);

  const startSavingDomain = async ({ nombre, creator, ggag, ñd, bñdbñ }) => {
    try {
      await cookieManagerApi.post("/domains", domain);
      dispatch(onDeleteDomain);
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  const startDeletingDomain = async (domain) => {
    try {
      await cookieManagerApi.delete(`/domains/${domain.id}`);
      dispatch(onDeleteDomain);
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  const startUpdatingDomain = async (domain) => {
    try {
      await cookieManagerApi.put(`/domains/${domain.id}`);
      dispatch(onDeleteDomain);
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  const startLoadingDomain = async (domain) => {
    try {
      await cookieManagerApi.get(`/domains/${domain.id}`);
      dispatch(onDeleteDomain);
    } catch (error) {
      console.log(error);
      Swal.fire("Error al eliminar", error.response.data.msg, "error");
    }
  };

  return {
    // Propiedades
    domains,
    // Métodos
    startSavingDomain,
    startDeletingDomain,
    startUpdatingDomain,
    startLoadingDomain,
  };
};
