import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const StatisticsCookiesPage = () => {
  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 14, mr: 14 }}>
      <Box>
        <Typography variant="h5">Estadísticas de uso de cookies</Typography>
        <Box sx={{ pt: 2 }}>
          <Typography variant="body">
            En la gráfica de abajo usted puede ver la frecuencia con que el
            total de acciones de consentimientos. Tenga en cuenta que es normal
            ver muchas sesiones que acciones de consentimiento ya que los
            usuarios que regresan se cuentan cada día que sistan el sistio web
            después de haber configurado los ajustes.
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangePicker"]}>
              <DateRangePicker
                localeText={{ start: "Fecha incio", end: "Fecha fin" }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Box>
      </Box>
      <Box sx={{ width: 800 }}>
        <Typography variant="h6" sx={{ pt: 2 }}>
          Aplica los siguientes filtros para refinar aun más los datos
        </Typography>
      </Box>
      <Grid2 container sx={{ pt: 2, width: 950 }}>
        <Box sx={{ width: 220, mr: 2 }}>
          <Typography sx={{ mb: 1 }}>Filtrar por tipo de cookie</Typography>
          <FormControl fullWidth size="medium">
            <InputLabel id="select-label-idioma">Tipo de cookie</InputLabel>
            <Select label="Tipo de cookie">
              <MenuItem value="Esenciales">Esenciales</MenuItem>
              <MenuItem value="Opcionales">Opcionales</MenuItem>
              <MenuItem value="Terceros">Terceros</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 220, mr: 2 }}>
          <Typography sx={{ mb: 1 }}>Filtrar por país de acceso</Typography>
          <FormControl fullWidth size="medium">
            <InputLabel id="select-label-idioma">País de acceso</InputLabel>
            <Select label="País de acceso">
              <MenuItem value="Esenciales">Francia</MenuItem>
              <MenuItem value="Opcionales">España</MenuItem>
              <MenuItem value="Terceros">Italia</MenuItem>
              <MenuItem value="Terceros">Alemania</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 220, mr: 2 }}>
          <Typography sx={{ mb: 1 }}>Filtrar por plataforma</Typography>
          <FormControl fullWidth size="medium">
            <InputLabel id="select-label-idioma">Tipo de plataforma</InputLabel>
            <Select label="Tipo de plataforma">
              <MenuItem value="movil">Móvil</MenuItem>
              <MenuItem value="web">Web</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 220 }}>
          <Typography sx={{ mb: 1 }}>Filtrar por el estado</Typography>
          <FormControl fullWidth size="medium">
            <InputLabel id="select-label-idioma">
              Estado de aceptación
            </InputLabel>
            <Select label="Estado de aceptación">
              <MenuItem value="aceptado">Aceptado</MenuItem>
              <MenuItem value="rechazado">Rechazado</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: 950 }}>
          <Divider sx={{ mt: 2 }} />
          <Button
            variant="contained"
            sx={{
              width: 220,
              height: 50,
              mt: 2,
              mr: 2,
              bgcolor: "secondary.main",
            }}
          >
            Aplicar filtros
          </Button>
          <Button
            variant="contained"
            sx={{
              width: 220,
              height: 50,
              mt: 2,
              bgcolor: "primary.main",
            }}
          >
            Limpiar filtros
          </Button>
        </Box>
      </Grid2>
    </Grid2>
  );
};
