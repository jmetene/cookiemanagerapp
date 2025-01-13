import PropTypes from "prop-types";
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
import { useDomainStore } from "../../hooks/useDomainStore";
import { useForm } from "../../hooks";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { CookieStats } from "../components/CookieStats";

const statisticsFormFields = {
  initDate: "",
  endDate: "",
  cookieType: "",
  country: "",
  platform: "",
  state: "",
};

const contarCookies = (estadisticas) => {
  return estadisticas.reduce(
    (contador, estadistica) => {
      if (estadistica.estado === "Aceptado") contador.aceptadas += 1;
      if (estadistica.estado === "Rechazado") contador.rechazadas += 1;
      return contador;
    },
    { aceptadas: 0, rechazadas: 0 }
  );
};

export const StatisticsCookiesPage = ({ domain }) => {
  const {
    statistics = [],
    startLoadingStatistics,
    isLoadingCookieStatistics,
  } = useDomainStore();

  // Evitamos que seleccione la fecha actual por defecto
  const [value, setvalue] = useState([null, null]);
  // const [value, setvalue] = useState(DateRangePicker < Dayjs >> [null, null]);

  const {
    initDate,
    endDate,
    cookieType,
    country,
    platform,
    state,
    onInputChange: onStatisticsInputChange,
    onResetForm: clearFilter,
  } = useForm(statisticsFormFields);

  const onStatisticsSubmit = (event) => {
    event.preventDefault();
    startLoadingStatistics({
      domainId: domain.id,
      estado: state,
      // Recoge la fecha actual y la formatea a un formato que acepta la API
      // TODO: evitar que coja la fecha actual si no se indica nada
      fechaDesde:
        value[0] === null
          ? ""
          : dayjs(value[0]).format("YYYY-MM-DD", "us", true),
      fechaHasta:
        value[1] == null
          ? ""
          : dayjs(value[1]).format("YYYY-MM-DD", "us", true),
      plataforma: platform,
      pais: country,
    });
  };

  console.log({
    domainId: domain.id,
    estado: state,
    fechaDesde: dayjs(value[0]).format("YYYY-MM-DD"),
    fechaHasta: dayjs(value[1]).format("YYYY-MM-DD"),
    plataforma: platform,
    pais: country,
  });

  const { aceptadas, rechazadas } = contarCookies(statistics);
  console.log({ aceptadas, rechazadas });

  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 14, mr: 14 }}>
      <form onSubmit={onStatisticsSubmit}>
        <Box component="div">
          <Typography variant="h5">Estadísticas de uso de cookies</Typography>
          <Box sx={{ pt: 2 }}>
            <Typography variant="body">
              En la gráfica de abajo usted puede ver la frecuencia con el total
              de acciones de consentimientos. Tenga en cuenta que es normal ver
              muchas sesiones que acciones de consentimiento ya que los usuarios
              que regresan se cuentan cada día que sistan el sistio web después
              de haber configurado los ajustes.
            </Typography>
          </Box>
          <Box sx={{ mt: 3, width: 930 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
              <DemoContainer components={["DateRangePicker"]}>
                <DateRangePicker
                  localeText={{ start: "Fecha incio", end: "Fecha fin" }}
                  value={value}
                  onChange={(newValue) => {
                    setvalue(newValue);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </Box>
        <Box sx={{ width: 800 }}>
          <Typography variant="h6" sx={{ pt: 2 }}>
            Aplica los siguientes filtros para refinar aun más los resultados
          </Typography>
        </Box>
        <Grid2 container sx={{ pt: 2, width: 950 }}>
          <Box sx={{ width: 220, mr: 2 }}>
            <Typography sx={{ mb: 1 }}>Filtrar por tipo de cookie</Typography>
            <FormControl fullWidth size="medium">
              <InputLabel id="select-label-idioma">Tipo de cookie</InputLabel>
              <Select
                label="Tipo de cookie"
                onChange={onStatisticsInputChange}
                name="cookieType"
                value={cookieType}
              >
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
              <Select
                label="País de acceso"
                onChange={onStatisticsInputChange}
                name="country"
                value={country}
              >
                <MenuItem value="fr">Francia</MenuItem>
                <MenuItem value="es">España</MenuItem>
                <MenuItem value="it">Italia</MenuItem>
                <MenuItem value="pt">Portugal</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: 220, mr: 2 }}>
            <Typography sx={{ mb: 1 }}>Filtrar por plataforma</Typography>
            <FormControl fullWidth size="medium">
              <InputLabel id="select-label-idioma">
                Tipo de plataforma
              </InputLabel>
              <Select
                label="Tipo de plataforma"
                onChange={onStatisticsInputChange}
                name="platform"
                value={platform}
              >
                <MenuItem value="Mobile">Móvil</MenuItem>
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
              <Select
                label="Estado de aceptación"
                value={state}
                onChange={onStatisticsInputChange}
                name="state"
              >
                <MenuItem value="aceptado">Aceptado</MenuItem>
                <MenuItem value="rechazado">Rechazado</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ width: 950 }}>
            <Divider sx={{ mt: 5, mb: 2 }} />
            <Button
              variant="contained"
              sx={{
                width: 220,
                height: 40,
                mt: 2,
                mr: 2,
                bgcolor: "secondary.main",
              }}
              type="submit"
            >
              Aplicar filtros
            </Button>
            <Button
              variant="contained"
              sx={{
                width: 220,
                height: 40,
                mt: 2,
                bgcolor: "primary.main",
              }}
              onClick={clearFilter}
            >
              Limpiar filtros
            </Button>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Estadísticas de cookies
            </Typography>
            {statistics.length > 0 && !isLoadingCookieStatistics ? (
              <CookieStats aceptadas={aceptadas} rechazadas={rechazadas} />
            ) : (
              <Typography>No hay datos disponibles.</Typography>
            )}
          </Box>
        </Grid2>
      </form>
    </Grid2>
  );
};

StatisticsCookiesPage.propTypes = {
  domain: PropTypes.object,
};
