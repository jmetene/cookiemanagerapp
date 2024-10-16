import {
  Box,
  FormControl,
  FormGroup,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const CCategoriesSettingsField = () => {
  return (
    <Grid2 container sx={{ mt: 2 }}>
      <FormGroup>
        <Box component="div">
          <Typography variant="h6" color="secondary.main">
            Categorías
          </Typography>
          <Typography variant="body2">
            Aquí puedes gestionar qué categorías se muestran en la declaración
            de cookies y cómo se comporta cada una.
          </Typography>
        </Box>
        <Grid2 container sx={{ mt: 2 }}>
          <Box component="div" sx={{ width: 484, mr: 3 }}>
            <FormControl fullWidth size="medium">
              <InputLabel id="necesarias-label-id">Necesarias</InputLabel>
              <Select label="necesarias">
                <MenuItem value="activas">Siempre visibles</MenuItem>
                <MenuItem value="desactivadas">Opcionales</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box component="div" sx={{ width: 484 }}>
            <FormControl fullWidth size="medium">
              <InputLabel id="opcionales-label-id">Opcionales</InputLabel>
              <Select label="Opcionales">
                <MenuItem value="activas">Siempre visibles</MenuItem>
                <MenuItem value="desactivadas">Opcionales</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box component="div" sx={{ width: 484, mt: 2 }}>
            <FormControl fullWidth size="medium">
              <InputLabel id="terceros-label-id">Terceros</InputLabel>
              <Select label="Terceros">
                <MenuItem value="activas">Siempre visibles</MenuItem>
                <MenuItem value="desactivadas">Opcionales</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid2>
      </FormGroup>
    </Grid2>
  );
};
