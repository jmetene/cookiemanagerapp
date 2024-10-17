import {
  Box,
  Button,
  Grid2,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";
import { CookieScanTable } from "../components/CookieScanTable";

export const ScannerCookiePage = () => {
  function createData(estado, totalCookies, fechaCreacion, fechaFinalizacion) {
    return { estado, totalCookies, fechaCreacion, fechaFinalizacion };
  }
  const escaneos = [
    createData("completado", 50, "16/10/2024 11:06", "16/10/2024 11:11"),
    createData("Completado", 50, "16/09/2024 11:05", "16/09/2024 11:10"),
    createData("Completado", 50, "17/08/2024 11:04", "17/08/2024 11:09"),
    createData("Completado", 50, "18/07/2024 11:03", "18/07/2024 11:08"),
  ];
  return (
    <Grid2 container sx={{ pb: 5, pt: 4, pl: 10, pr: 10 }}>
      <Box sx={{ width: 990 }}>
        <Box component="div">
          <Typography variant="h6" sx={{ color: "secondary.main" }}>
            Escaneo de cookies
          </Typography>
        </Box>
        <Box component="div" sx={{ mt: 2 }}>
          <TableContainer component={Paper}>
            <CookieScanTable key={escaneos.fechaCreacion} scans={escaneos} />
          </TableContainer>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Button variant="contained" sx={{ bgcolor: "secondary.main" }}>
            Escanear cookies
          </Button>
        </Box>
      </Box>
    </Grid2>
  );
};
