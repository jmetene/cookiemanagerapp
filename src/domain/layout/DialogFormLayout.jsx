import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import PropTypes from "prop-types";

export const DialogFormLayout = ({
  children,
  title = "",
  description = "",
  domainToEdit,
  startUpdatingDomain,
  openEditDomainDialog,
  handleCloseEditDomainDialog,
}) => {
  const onEditDomainSubmit = (event) => {
    event.preventDefault();
    startUpdatingDomain({
      id: domainToEdit.id,
      nombre: domainToEdit.nombre,
      descripcion: domainToEdit.descripcion,
      estado: "activo",
      propietario: domainToEdit.propietario,
      contactoEmail: domainToEdit.contactoEmail,
    });
  };
  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={openEditDomainDialog}
      onClose={handleCloseEditDomainDialog}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          onEditDomainSubmit(event);
          handleCloseEditDomainDialog();
        },
      }}
    >
      <DialogTitle sx={{ pl: 8, pr: 8 }}>{title}</DialogTitle>
      <DialogContent sx={{ pl: 8, pr: 8 }}>
        <DialogContentText>{description}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions sx={{ pl: 8, pr: 8, pb: 3 }}>
        <Button
          variant="outlined"
          type="submit"
          sx={{
            bgcolor: "secondary.main",
            color: "white",
            borderColor: "secondary.main",
          }}
        >
          Añadir dominio
        </Button>
        <Button
          variant="outlined"
          sx={{ bgcolor: "primary.main", color: "white" }}
          onClick={handleCloseEditDomainDialog}
        >
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DialogFormLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  domainToEdit: PropTypes.object,
  startUpdatingDomain: PropTypes.func,
  openEditDomainDialog: PropTypes.bool,
  handleCloseEditDomainDialog: PropTypes.func,
};
