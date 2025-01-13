import {
  Backdrop,
  Box,
  CircularProgress,
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

/**
 * MainSection component that displays a list of domains with pagination.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * return (
 *   <MainSection />
 * )
 *
 * @description
 * This component fetches and displays a list of domains from the domain store.
 * It includes pagination controls to navigate through the list of domains.
 *
 * @hook
 * useEffect - Fetches the domains when the component is mounted.
 *
 * @state {number} page - The current page number.
 * @state {number} rowsPerPage - The number of rows to display per page.
 *
 * @function handleChangePage - Handles the page change event.
 * @function handleChangeRowsPerPage - Handles the change in the number of rows per page.
 *
 * @returns {JSX.Element} The rendered component.
 */
export const MainSection = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // const { user } = useAuthStore();
  const { domains, isLoadingDomains, startLoadingDomains } = useDomainStore();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    startLoadingDomains();
  }, []);

  if (isLoadingDomains)
    return (
      <Box>
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
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
        {isLoadingDomains === true ? (
          <Box>
            <Backdrop
              sx={(theme) => ({
                color: "#fff",
                zIndex: theme.zIndex.drawer + 1,
              })}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Box>
        ) : (
          <Box sx={{ mt: 5 }}>
            <TableContainer component={Paper}>
              <DomainTable
                domains={domains}
                user={user}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={domains.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        )}
      </Container>
    </Grid2>
  );
};
