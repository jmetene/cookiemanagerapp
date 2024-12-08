import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useForm } from "../../hooks";
import { useDomainStore } from "../../hooks/useDomainStore";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { DialogForm } from "./DialogForm";

const createDomainForm = {
  domainName: "",
  domainUrl: "",
  ownerName: "",
  ownerEmail: "",
  domainDesc: "",
};

export const CAddDomainDialog = ({
  openAddDomainDialog,
  handleCloseAddDomainDialog,
}) => {
  const estado = "activo";
  const { startSavingDomain, startLoadingDomains, errorMessage } =
    useDomainStore();

  const {
    domainName,
    domainUrl,
    ownerName,
    ownerEmail,
    domainDesc,
    onInputChange: onCreateDomainChange,
  } = useForm(createDomainForm);

  const onCreateDomainSubmit = (event) => {
    event.preventDefault();
    startSavingDomain({
      nombre: domainName,
      descripcion: domainDesc,
      estado: estado,
      propietario: ownerName,
      contactoEmail: ownerEmail,
    });
    // startLoadingDomains();
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
        open={openAddDomainDialog}
        onClose={handleCloseAddDomainDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            onCreateDomainSubmit(event);
            handleCloseAddDomainDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Añadir dominio</DialogTitle>
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
            domainName={domainName}
            domainUrl={domainUrl}
            ownerName={ownerName}
            ownerEmail={ownerEmail}
            domainDesc={domainDesc}
            onEditDomainChange={onCreateDomainChange}
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
            Añadir dominio
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseAddDomainDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
CAddDomainDialog.propTypes = {
  openAddDomainDialog: PropTypes.bool,
  handleCloseAddDomainDialog: PropTypes.func,
};
