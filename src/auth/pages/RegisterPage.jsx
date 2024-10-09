import { CookieRounded } from "@mui/icons-material";
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

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro" size={480}>
      <form>
        <Grid2 container>
          <Grid2 container size={12}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre"
              size="medium"
              required
              sx={{ mr: 0.5 }}
            />
            <TextField
              label="Apellidos"
              type="text"
              placeholder="Apellidos"
              size="medium"
              required
            />
          </Grid2>
          <Grid2 size={12} sx={{ mr: 1, mt: 1 }}>
            <TextField
              label="Correo electónico"
              type="email"
              placeholder="Correo electónico"
              fullWidth
              size="medium"
              required
            />
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              size="medium"
              required
              sx={{ mt: 1 }}
            />
            <TextField
              label="Empresa"
              type="text"
              placeholder="Empresa"
              fullWidth
              size="medium"
              required
              sx={{ mt: 1 }}
            />
            <FormControl fullWidth sx={{ mt: 1 }} size="medium">
              <InputLabel id="select-label">Plan</InputLabel>
              <Select label="Plan">
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
