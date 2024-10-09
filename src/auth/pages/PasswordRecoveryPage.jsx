import { Button, Grid2, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const PasswordRecoveryPage = () => {
  return (
    <AuthLayout
      title="Recuperar contraseña"
      description="Introduce tu correo electrónico y te enviaremos un enlace para
          resetear tu contraseña"
      size={420}
    >
      <form>
        <Grid2 container>
          <Grid2 size={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo electrónico"
              type="email"
              placeholder="Correo electrónico"
              fullWidth
              size="medium"
              required
            />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} sx={{ mb: 2, mt: 4 }}>
          <Grid2 size={12}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ height: 52, bgcolor: "secondary.main" }}
            >
              RESETEAR CONTRASEÑA
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
            O inciar sesión en tu cuenta
          </Link>
        </Grid2>
      </form>
    </AuthLayout>
  );
};
