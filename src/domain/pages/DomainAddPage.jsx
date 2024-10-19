import PropTypes from "prop-types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

export const DomainAddPage = ({ openAddNewDomain, handleAddNewDomain }) => {
  return (
    <Box>
      <Dialog
        open={openAddNewDomain}
        onClose={handleAddNewDomain}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleAddNewDomain();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddNewDomain}>Cancelar</Button>
          <Button type="submit">Crear dominio</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

DomainAddPage.propTypes = {
  openAddNewDomain: PropTypes.bool,
  handleAddNewDomain: PropTypes.func,
};
