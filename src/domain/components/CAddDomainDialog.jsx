import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";

export const CAddDomainDialog = ({
  openAddDomainDialog,
  handleCloseAddDomainDialog,
}) => {
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
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseAddDomainDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Añadir dominio</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText>
            <Typography color="primary.main">
              Escriba su nombre de dominio o sitio web a continuación para crear
              una nueva instancia de CookieManager
            </Typography>
            <Typography sx={{ mt: 2 }} color="primary.main">
              CookieManager restrará el sitio web para identificar las cookies
              en uso y crear un banner personalizado de consentimiento de
              cookies. La primera exploración sólo escanerá una solo página para
              acelerar el proceso de despliegue. Una exploración completa del
              sitio se llevará a cabo 24 horas más tarde o puede solicitar
              manualmente un nuevo análisis.
            </Typography>
          </DialogContentText>
          <Box>
            <Grid2 container direction={"row"}>
              <Box sx={{ width: 775, mt: 2 }}>
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="Nombre de dominio"
                  label="Nombre de dominio"
                  placeholder="dominio.com"
                  type="text"
                  sx={{ width: 378, mr: 2 }}
                />
                <TextField
                  autoFocus
                  required
                  placeholder="https://www.dominio.com"
                  id="name"
                  name="url"
                  label="Url dominio"
                  type="text"
                  sx={{ width: 378 }}
                />
              </Box>
              <Box sx={{ width: 775, mt: 1 }}>
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="Nombre propietario"
                  label="Nombre propietario"
                  type="text"
                  sx={{ width: 378, mr: 2 }}
                />
                <TextField
                  autoFocus
                  required
                  id="name"
                  name="email"
                  label="Correo electrónico"
                  type="email"
                  sx={{ width: 378 }}
                />
              </Box>
              <Box sx={{ width: 775, mt: 1 }}>
                <TextField
                  autoFocus
                  id="name"
                  name="Descripción"
                  label="Descripción"
                  type="text"
                  fullWidth
                  multiline
                  rows={4}
                  maxRows={4}
                />
              </Box>
            </Grid2>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Marcos políticos y configuración del consentimiento
            </Typography>
            <Typography>
              Seleccione una plantilla a continuación para controlar la
              configuración regional y los marcos de políticas para su dominio.
              Siempre puede cambiar estos ajustes más adelante.
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Por defecto (consentimiento explícito)"
              />
            </FormGroup>
            <Typography>
              El diálogo de consentimiento de CookieManager se mostrará para
              todos los usuarios, requiriendo el consentimiento explícito.
              Política simple y estricta para cumplir con la mayoría de las
              regulaciones, incluyendo GDPR.
            </Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>
              Marcos políticos y configuración del consentimiento
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Activar el modo consentimiento"
              />
            </FormGroup>
            <Typography>
              El modo de consentimiento está perfectamente integrado en
              CookieManager, garantizando una implementación sin esfuerxo en
              línea con los requisitos técnicos del modo de consentimiento.
            </Typography>
          </Box>
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
