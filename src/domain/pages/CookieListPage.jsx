import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  ButtonGroup,
  IconButton,
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
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useCookieStore } from "../../hooks/useCookieStore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CEditCookieDialog } from "../components/CEditCookieDialog";

export const CookieListPage = () => {
  const { id } = useParams();
  const [openEditCookieDialog, setOpenEditCookieDialog] = useState(false);

  // const { startDeletingDomain, errorMessage } = useDomainStore();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { cookies, startLoadingCookies, startDeletingCookie, errorMessage } =
    useCookieStore();

  useEffect(() => {
    startLoadingCookies(id);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Hook con el la información de la cookie a editar
  const [cookieToEdit, setCookieToEdit] = useState({});

  // Establecemos la cookie a editar
  const handleOpenEditCookie = (cookie) => {
    setOpenEditCookieDialog(true);
    setCookieToEdit(cookie);
  };

  const handleCloseEditCookieDialog = () => {
    setOpenEditCookieDialog(false);
  };

  const handleDeleteCookie = (cookieId) => {
    Swal.fire({
      title: "Estás a punto de eliminar una cookie, ¿Estás seguro?",
      text: "Esta acción no podrá ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        startDeletingCookie(cookieId);
        Swal.fire({
          title: "Cookie Eliminada",
          text: "La cookie se ha sido eliminado correctamente.",
          icon: "success",
        });
        // Solicitamos otra vez el listado de cookies
        // startLoadingCookies(id);
      }
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error al eliminar la cookie", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <>
      <TableContainer component={Paper}>
        <CEditCookieDialog
          openEditCookieDialog={openEditCookieDialog}
          handleCloseEditCookieDialog={handleCloseEditCookieDialog}
          cookie={cookieToEdit}
        />
        <Table sx={{ minWidth: 650, mt: 5 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Provedor</TableCell>
              <TableCell>Duración</TableCell>
              <TableCell>Operaciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cookies
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((cookie) => (
                <TableRow
                  key={cookie.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography variant="body1">{cookie.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">
                      {cookie.type.toLowerCase()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">
                      {cookie.description}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{cookie.provider}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1">{cookie.duration}</Typography>
                  </TableCell>
                  <TableCell>
                    <ButtonGroup variant="text" aria-label="Basic button group">
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenEditCookie(cookie)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDeleteCookie(cookie.id)}
                        color="primary"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={cookies.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

CookieListPage.propTypes = {
  user: PropTypes.object,
};
