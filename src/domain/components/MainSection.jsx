import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid2,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const MainSection = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function createData(codigo, nombre, totalCookies) {
    return { codigo, nombre, totalCookies };
  }
  const dominios = [
    createData("24f15e7d", "www.marca.com", 384),
    createData("24f15da8", "www.elpais.es", 90),
    createData("24f1742a", "www.elmundo.es", 160),
  ];
  return (
    <Grid2
      container
      direction="column"
      sx={{ backgroundColor: "#EAE4DD", padding: 5 }}
    >
      <Container>
        <Box>
          <Grid2 container spacing={2}>
            <Grid2 size={4} alignContent="center">
              <Typography
                variant="h4"
                align="left"
                sx={{
                  color: "primary.main",
                  fontStyle: "normal",
                }}
              >
                Mis dominios
              </Typography>
            </Grid2>
            <Grid2 container size={8} alignContent="center">
              <Paper
                component="form"
                sx={{
                  ml: 24.01,
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 300,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Buscar dominio"
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <Search />
                </IconButton>
                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                ></IconButton>
              </Paper>
              <Button variant="contained">Buscar</Button>
              <Button variant="contained" sx={{ bgcolor: "secondary.main" }}>
                Añadir dominio
              </Button>
            </Grid2>
          </Grid2>
        </Box>
        <Box sx={{ mt: 5 }}>
          <TableContainer component={Paper}>
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
                      <Typography variant="body1">
                        {dominio.totalCookies}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <ButtonGroup
                        variant="text"
                        aria-label="Basic button group"
                      >
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
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={dominios.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Container>
    </Grid2>
  );
};
