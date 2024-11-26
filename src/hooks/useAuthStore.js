import { useDispatch, useSelector } from "react-redux";
import cookieManagerApi from "../api/cookieManagerApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    console.log({ email, password });

    dispatch(onChecking());
    try {
      const { data } = await cookieManagerApi.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", "Bearer " + data.token);
      dispatch(
        onLogin({
          email: data.user.email,
          name: data.user.firstName,
          lastname: data.user.lastName,
          plan: data.user.suscriptionPlan,
        })
      );
      console.log({ token: data.token });
    } catch (error) {
      console.log(error);
      // Error genérico
      dispatch(onLogout("Credenciales inválidas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({
    name,
    surnames,
    email,
    password,
    company,
    suscriptionPlan,
  }) => {
    try {
      const response = await cookieManagerApi.post("/auth/register", {
        name,
        surnames,
        email,
        password,
        company,
        suscriptionPlan,
      });
      console.log(response);
    } catch (error) {
      dispatch(onLogout(error.response.data?.error.violations[0] || ""));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
      console.log(error);
    }
  };

  /*Método para verificar si un usuario está autenticado
   * Si tiene el token caducado se lo renueva comprobando previamente
   * que sea un JWT Token válido.
   */
  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");

    if (!token) return dispatch(onLogout());

    try {
      const { data } = await cookieManagerApi.get("/auth/refreshToken");
      localStorage.setItem("token", "Bearer " + data.token);
      dispatch(onLogin());
    } catch (error) {
      console.log(error);
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = async () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    //* Propiedades
    errorMessage,
    status,
    user,
    //* Metodos
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  };
};
