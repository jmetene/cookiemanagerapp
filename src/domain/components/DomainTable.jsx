import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export const DomainTable = ({ dominios = [] }) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Código</TableCell>
          <TableCell>Nombre</TableCell>
          <TableCell>Total cookies</TableCell>
          <TableCell>Operación</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dominios.map((dominio) => (
          <TableRow
            key={dominio.codigo}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Typography variant="body1">{dominio.codigo}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{dominio.nombre}</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1">{dominio.totalCookies}</Typography>
            </TableCell>
            <TableCell>
              <ButtonGroup variant="text" aria-label="Basic button group">
                <Button
                  variant="text"
                  href="/domains/details"
                  sx={{
                    "&:hover": {
                      bgcolor: "secondary.main",
                      color: "white",
                    },
                  }}
                >
                  Ver detalles
                </Button>
                <Button variant="text" color="error">
                  Eliminar
                </Button>
              </ButtonGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

DomainTable.propTypes = {
  dominios: PropTypes.array,
};
