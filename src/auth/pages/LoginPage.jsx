import { CookieRounded } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const LoginPage = () => {
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
            mb: 1,
            mt: 3,
            mr: 0.2,
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
          sx={{ mt: 3, color: "secondary.main" }}
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
          width: { md: 420 },
        }}
      >
        <Typography variant="h4" align="center" sx={{ mt: 1 }}>
          Iniciar sesión
        </Typography>
        <Grid2 sx={{ mt: 3 }}>
          <Typography variant="body1" align="center" sx={{ mb: 1 }}>
            Introduce tu email y contraseña para iniciar sesión en tu cuenta
          </Typography>
        </Grid2>
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
              <Grid2
                container
                direction="row"
                justifyContent="end"
                sx={{ mt: 1, mb: 1 }}
              >
                <Link
                  to="/auth/recovery-password"
                  component={RouterLink}
                  underline="none"
                  sx={{ color: "secondary.main" }}
                >
                  ¿Has olvidado la contraseña?
                </Link>
              </Grid2>
            </Grid2>
            <Grid2 size={12}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
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
                INICIAR SESIÓN
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
              to="/auth/register"
              component={RouterLink}
              underline="none"
              sx={{ color: "secondary.main" }}
            >
              ¿No tienes una cuenta? Registrarse
            </Link>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  );
};
