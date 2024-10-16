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

export const CLenguageSettingsField = () => {
  return (
    <Grid2 container sx={{ mt: 2 }}>
      <FormGroup>
        <Box component="div">
          <Typography variant="h6" color="secondary.main">
            Idiomas
          </Typography>
          <Typography variant="body2">Elija el idioma por defecto</Typography>
        </Box>
        <Box sx={{ mt: 2, width: 480, mr: 3 }}>
          <FormControl fullWidth size="medium">
            <InputLabel id="select-label-idioma">Idiomas</InputLabel>
            <Select label="idiomas">
              <MenuItem value="Aleman">Alemán</MenuItem>
              <MenuItem value="Frances">Francés</MenuItem>
              <MenuItem value="Ingles">Inglés</MenuItem>
              <MenuItem value="Italiano">Italiano</MenuItem>
              <MenuItem value="Portugues">Portugués</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </FormGroup>
    </Grid2>
  );
};
