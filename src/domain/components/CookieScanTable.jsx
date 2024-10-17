import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const CookieScanTable = ({ scans = [] }) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Estado</TableCell>
          <TableCell>Cookies</TableCell>
          <TableCell>Fecha creación</TableCell>
          <TableCell>Fecha completación</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {scans.map((scan) => (
          <TableRow
            key={scan.codigo}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Typography variant="body1">{scan.estado}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{scan.totalCookies}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{scan.fechaCreacion}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{scan.fechaFinalizacion}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

CookieScanTable.propTypes = {
  scans: PropTypes.array,
};
