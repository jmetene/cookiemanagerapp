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
import { CCookieForm } from "./CCookieForm";
import { useForm } from "../../hooks";
import { useCookieStore } from "../../hooks/useCookieStore";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { editCookieForm } from "../utils/editCookieForm";

export const CEditCookieDialog = ({
  cookie = {},
  openEditCookieDialog,
  handleCloseEditCookieDialog,
}) => {
  const { startUpdatingCookie, errorMessage } = useCookieStore();
  const {
    cookieType,
    description,
    provider,
    duration,
    sameSite,
    secure,
    onInputChange: onEditCookieChange,
  } = useForm(editCookieForm);

  const onUpdateCookieSubmit = (event) => {
    event.preventDefault();

    startUpdatingCookie({
      id: cookie.id,
      name: cookie.name,
      type: cookieType,
      description: description,
      provider: provider,
      duration: duration,
      sameSite: sameSite,
      httpOnly: true,
      secure: secure === "S" ? true : false,
    });
  };

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire(
        "Error al actualizar los datos de la cookie",
        errorMessage,
        "error"
      );
    }
  }, [errorMessage]);

  return (
    <Box>
      <Dialog
        fullWidth
        maxWidth="lg"
        open={openEditCookieDialog}
        onClose={handleCloseEditCookieDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            onUpdateCookieSubmit(event);
            handleCloseEditCookieDialog();
          },
        }}
      >
        <DialogTitle sx={{ pl: 8, pr: 8 }}>Añadir cookie</DialogTitle>
        <DialogContent sx={{ pl: 8, pr: 8 }}>
          <DialogContentText>
            Si una cookie se ha modificado y durante el proceso de escaneo no se
            ha detectado los cambios, puedes editarla manualmente en tu
            declaración de cookie.
          </DialogContentText>
          <CCookieForm
            cookieName={cookie.name}
            cookieType={cookieType}
            description={description}
            provider={provider}
            duration={duration}
            sameSite={sameSite}
            secure={secure}
            onAddCookieChange={onEditCookieChange}
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
            Editar cookie
          </Button>
          <Button
            variant="outlined"
            sx={{ bgcolor: "primary.main", color: "white" }}
            onClick={handleCloseEditCookieDialog}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

CEditCookieDialog.propTypes = {
  cookie: PropTypes.object,
  openEditCookieDialog: PropTypes.bool,
  handleCloseEditCookieDialog: PropTypes.func,
};
