import {
  Box,
  FormControl,
  FormGroup,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export const CRegionalSettingsField = () => {
  return (
    <Grid2 container sx={{ mt: 2 }}>
      <FormGroup>
        <Box component="div">
          <Typography variant="h6" color="secondary.main">
            Configuración regional
          </Typography>
          <Typography variant="body2">
            Ajuste el comportamiento de CookieManager y los marcos normativos
            según la ubicación de los usuarios. Tienes la opción de modificar el
            tipo de diálogo, el consentimiento, el marco legal y el diseño del
            widget de CookieManager para cada región agregada. Si un usuario no
            pertenece a una región específica, se aplicarán las configuraciones
            por defecto de la región predeterminada.
          </Typography>
        </Box>
        <Grid2 container sx={{ mt: 2 }} component="div">
          <Box Box component="div" sx={{ width: 484, mr: 3 }}>
            <FormControl fullWidth size="medium">
              <InputLabel id="select-label">Tipo de consentimiento</InputLabel>
              <Select label="Tipo de consentimiento">
                <MenuItem value="Explicito">Explícito</MenuItem>
                <MenuItem value="Implicito">Implícito</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box component="div" sx={{ width: 484 }}>
            <TextField
              fullWidth
              label="Mensaje de bienvenida"
              type="text"
              placeholder="Mensaje de bienvenida"
              size="medium"
              required
            />
          </Box>
        </Grid2>
      </FormGroup>
    </Grid2>
  );
};
