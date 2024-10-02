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
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2 container>
        <CookieRounded
          fontSize="large"
          sx={{
            mt: 3,
            color: "secondary.main",
            rotate: "45deg",
          }}
        />
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 1, mt: 3, color: "white" }}
        >
          Cookie
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 1, mt: 3, color: "secondary.main" }}
        >
          Manager
        </Typography>
      </Grid2>
      <Grid2
        className="box-shadow"
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { md: 480 },
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 2, mt: 1 }}>
          Registro
        </Typography>
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
          <Grid2
            container
            direction="row"
            justifyContent="center"
            sx={{ mb: 3 }}
          >
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
      </Grid2>
    </Grid2>
  );
};
