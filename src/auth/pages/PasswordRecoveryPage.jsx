import CookieRounded from "@mui/icons-material/CookieRounded";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const PasswordRecoveryPage = () => {
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
          CookieManager
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
        <Typography variant="h4" align="center" sx={{ mb: 1, mt: 3 }}>
          Recuperar contraseña
        </Typography>
        <Grid2 sx={{ mt: 3 }}>
          <Typography variant="body1" align="center" sx={{ mb: 1 }}>
            Introduce tu correo electrónico y te enviaremos un enlace para
            resetear tu contraseña
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
              O inciar sesión en tu cuenta
            </Link>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  );
};
