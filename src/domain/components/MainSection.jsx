import {
  Box,
  Container,
  Grid2,
  Paper,
  TableContainer,
  TablePagination,
} from "@mui/material";
import { useState } from "react";
import { DomainTable } from "./DomainTable";
import { HeadSection } from "./HeadSection";

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
      sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
    >
      <Container>
        <Box>
          <HeadSection />
        </Box>
        <Box sx={{ mt: 5 }}>
          <TableContainer component={Paper}>
            <DomainTable dominios={dominios} />
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
