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
// import { useSelector } from "react-redux";

export const MainSection = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // const { user } = useAuthStore();
  const { domains, isLoadingDomains, startLoadingDomains } = useDomainStore();
  // const isPersisted = useSelector((state) => state._persist.rehydrated); // Verifica si redux-persist ha restaurado

  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    // if (isPersisted) {
    startLoadingDomains();
  }, []);

  if (isLoadingDomains) return <p>Cargando el listado de dominios...</p>;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
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
          <TableContainer component={Paper}>
            <DomainTable domains={domains} user={user} />
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
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
