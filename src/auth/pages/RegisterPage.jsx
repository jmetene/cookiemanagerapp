import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid2,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks/useForm";
import { useAuthStore } from "../../hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";

const registerFormFields = {
  registerName: "",
  registerLastName: "",
  registerEmail: "",
  registerPassword: "",
  registerEnterprise: "",
  registerSubscriptionPlan: "starter",
};

export const RegisterPage = () => {
  const { startRegister, errorMessage } = useAuthStore();
  const {
    registerName,
    registerLastName,
    registerEmail,
    registerPassword,
    registerEnterprise,
    registerSubscriptionPlan,
    onInputChange: onRegisterInputChange,
  } = useForm(registerFormFields);

  // Para enviar los datos del registro
  const registerSubmit = (event) => {
    event.preventDefault();
    startRegister({
      name: registerName,
      surnames: registerLastName,
      email: registerEmail,
      password: registerPassword,
      company: registerEnterprise,
      suscriptionPlan: registerSubscriptionPlan,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error durante el registro", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <AuthLayout title="Registro" size={480}>
      <form onSubmit={registerSubmit}>
        <Grid2 container>
          <Grid2 container size={12}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre"
              name="registerName"
              value={registerName}
              onChange={onRegisterInputChange}
              size="medium"
              required
              sx={{ mr: 0.5 }}
            />
            <TextField
              label="Apellidos"
              type="text"
              name="registerLastName"
              value={registerLastName}
              onChange={onRegisterInputChange}
              placeholder="Apellidos"
              size="medium"
              required
            />
          </Grid2>
          <Grid2 size={12} sx={{ mr: 1, mt: 1 }}>
            <TextField
              label="Correo electónico"
              type="email"
              name="registerEmail"
              value={registerEmail}
              onChange={onRegisterInputChange}
              placeholder="Correo electónico"
              fullWidth
              size="medium"
              required
            />
            <TextField
              label="Contraseña"
              type="password"
              name="registerPassword"
              value={registerPassword}
              onChange={onRegisterInputChange}
              placeholder="Contraseña"
              fullWidth
              size="medium"
              required
              sx={{ mt: 1 }}
            />
            <TextField
              label="Empresa"
              type="text"
              name="registerEnterprise"
              value={registerEnterprise}
              onChange={onRegisterInputChange}
              placeholder="Empresa"
              fullWidth
              size="medium"
              required
              sx={{ mt: 1 }}
            />
            <FormControl fullWidth sx={{ mt: 1 }} size="medium">
              <InputLabel id="select-label">Plan</InputLabel>
              <Select
                label="Plan"
                onChange={onRegisterInputChange}
                name="registerSubscriptionPlan"
                value={registerSubscriptionPlan}
              >
                <MenuItem value="Starter">Starter</MenuItem>
                <MenuItem value="Basic">Basic</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Enterprise">Enterprise</MenuItem>
              </Select>
            </FormControl>
            <FormGroup sx={{ mt: 1 }}>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Acepto las condiciones de Servicio y la Política de Privacidad"
                sx={{ color: "secondary.main" }}
              />
            </FormGroup>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} sx={{ mb: 2, mt: 4, mr: 1, ml: 1 }}>
          <Grid2 size={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ height: 52, bgcolor: "secondary.main" }}
            >
              CREAR CUENTA
            </Button>
          </Grid2>
        </Grid2>
        <Grid2 container direction="row" justifyContent="center" sx={{ mb: 3 }}>
          <Link
            to="/auth/login"
            component={RouterLink}
            underline="none"
            sx={{ color: "secondary.main" }}
          >
            ¿Ya tienes una cuenta? Inciar sesión
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
