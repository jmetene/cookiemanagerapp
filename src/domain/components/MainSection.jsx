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
import { useDomainStore } from "../../hooks/useDomainStore";
import { useEffect } from "react";

export const MainSection = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { domains, isLoadingDomains, startLoadingDomains } = useDomainStore();

  useEffect(() => {
    startLoadingDomains();
  }, []);

  if (isLoadingDomains) return <p>Cargando el listado de dominios...</p>;

  // Paginado de la tabla de dominios
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value, 10);
    setPage(0);
  };

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
          {/* Poner el componente de carga de dominios */}

          <TableContainer component={Paper}>
            <DomainTable
              domains={domains}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={domains.length}
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
