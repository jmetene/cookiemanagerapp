import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import PropTypes from "prop-types";
import { useDomainStore } from "../../hooks/useDomainStore";
import { useForm } from "../../hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { DialogForm } from "./DialogForm";
const updateDomainForm = {
  domainName: "",
  domainUrl: "",
  ownerName: "",
  ownerEmail: "",
  domainDesc: "",
};
export const CEditDomainDialog = ({
  domainToEdit,
  openEditDomainDialog,
  handleCloseEditDomainDialog,
}) => {
  const { startUpdatingDomain, errorMessage } = useDomainStore();

  const {
    // domainName,
    ownerName,
    ownerEmail,
    domainDesc,
    onInputChange: onEditDomainChange,
  } = useForm(updateDomainForm);

  const onUpdateDomainSubmit = () => {
    // event.preventDefault();
    startUpdatingDomain({
      id: domainToEdit.id,
      nombre: domainToEdit.nombre,
      descripcion: domainDesc,
      estado: "activo",
      propietario: ownerName,
      contactoEmail: ownerEmail,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en los datos del dominio", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openEditDomainDialog}
        onClose={handleCloseEditDomainDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            onUpdateDomainSubmit(event);
            handleCloseEditDomainDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Editar dominio </DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText>
            Escriba su nombre de dominio o sitio web a continuación para crear
            una nueva instancia de CookieManager
          </DialogContentText>
          <DialogContentText sx={{ mt: 2 }} color="primary.main">
            CookieManager restrará el sitio web para identificar las cookies en
            uso y crear un banner personalizado de consentimiento de cookies. La
            primera exploración sólo escanerá una solo página para acelerar el
            proceso de despliegue. Una exploración completa del sitio se llevará
            a cabo 24 horas más tarde o puede solicitar manualmente un nuevo
            análisis.
          </DialogContentText>
          <DialogForm
            domainName={domainToEdit.nombre}
            domainUrl={domainToEdit.nombre}
            ownerName={ownerName}
            ownerEmail={ownerEmail}
            domainDesc={domainDesc}
            onEditDomainChange={onEditDomainChange}
          />
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
            Editar dominio
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
    </Box>
  );
};
CEditDomainDialog.propTypes = {
  domainToEdit: PropTypes.object.isRequired,
  openEditDomainDialog: PropTypes.bool,
  handleCloseEditDomainDialog: PropTypes.func,
};
