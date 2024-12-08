import PropTypes from "prop-types";
import { useEffect, useState } from "react";
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
import { CEditDomainDialog } from "./CEditDomainDialog";
import { useDomainStore } from "../../hooks/useDomainStore";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const DomainTable = ({ domains = [], page, rowsPerPage }) => {
  const [openEditDomainDialog, setOpenEditDomainDialog] = useState(false);

  const { startDeletingDomain, errorMessage } = useDomainStore();

  // Hook con el la información del dominio a editar
  const [domainToEdit, setDomainToEdit] = useState({});

  // Establecemos el dominio a editar
  const handleOpenEditDomain = (domain) => {
    setOpenEditDomainDialog(true);
    setDomainToEdit(domain);
  };

  const handleCloseEditDomainDialog = () => {
    setOpenEditDomainDialog(false);
  };

  const handleDeleteDomain = (domainId) => {
    Swal.fire({
      title: "Estás a punto de eliminar un dominio, ¿Estás seguro?",
      text: "Esta acción no podrá ser revertida",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        startDeletingDomain(domainId);
        Swal.fire({
          title: "Domininio Eliminado",
          text: "El dominio ha sido eliminado correctamente.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error al eliminar el dominio", errorMessage, "error");
    }
  }, [errorMessage]);

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
        {domains
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((domain) => (
            <TableRow
              key={domain.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant="body1">{domain.id}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{domain.nombre}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">{domain.totalCookies}</Typography>
              </TableCell>
              <TableCell>
                <ButtonGroup variant="text" aria-label="Basic button group">
                  <Button
                    variant="text"
                    // onClick={() => navigate("/domains/details")}
                    sx={{
                      "&:hover": {
                        bgcolor: "secondary.main",
                        color: "white",
                      },
                    }}
                  >
                    <Link to={`/domains/${domain.id}`}>Ver detalles</Link>
                  </Button>
                  <Button
                    onClick={() => handleOpenEditDomain(domain)}
                    variant="text"
                    sx={{
                      "&:hover": {
                        bgcolor: "secondary.main",
                        color: "white",
                      },
                    }}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => handleDeleteDomain(domain.id)}
                  >
                    Eliminar
                  </Button>
                  <CEditDomainDialog
                    openEditDomainDialog={openEditDomainDialog}
                    handleCloseEditDomainDialog={handleCloseEditDomainDialog}
                    domainToEdit={domainToEdit}
                  />
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

DomainTable.propTypes = {
  domains: PropTypes.array,
  user: PropTypes.object,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
};
