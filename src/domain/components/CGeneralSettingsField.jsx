import {
  FormControlLabel,
  FormGroup,
  Grid2,
  Switch,
  Typography,
} from "@mui/material";

export const CGeneralSettingsField = () => {
  return (
    <Grid2 container sx={{ mt: 2 }}>
      <FormGroup>
        <Typography variant="h6" color="secondary.main">
          General
        </Typography>
        <FormControlLabel
          control={<Switch />}
          label="Actualizaciones automáticas"
        />
        <Typography variant="body2" color="grey">
          Mantén el widget de CookieManager siempre actilizado a la versión más
          refiente de forma automática
        </Typography>
        <FormControlLabel
          control={<Switch />}
          label="Bloqueo automático de cookies"
        />
        <Typography variant="body2" color="grey">
          Cuando se activa, CookieManager bloquea automáticamente las cookies
          establecidas por los servicios comunes hasta que el usuario haya dado
          su consentimiento
        </Typography>
      </FormGroup>
    </Grid2>
  );
};
