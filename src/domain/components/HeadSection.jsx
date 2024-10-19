import { useState } from "react";
import { Search } from "@mui/icons-material";
import {
  Button,
  Grid2,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

import { CAddDomainDialog } from "./CAddDomainDialog";

export const HeadSection = () => {
  const [openAddDomainDialog, setOpenAddDomainDialog] = useState(false);

  const handleOpenAddDomain = () => {
    console.log("Abriendo el dialogo para añadir dominio");
    setOpenAddDomainDialog(true);
  };

  const handleCloseAddDomainDialog = () => {
    console.log("Cerrando el dialogo de añadir dominio");
    setOpenAddDomainDialog(false);
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={4} alignContent="center">
        <Typography
          variant="h4"
          align="left"
          sx={{
            color: "primary.main",
            fontStyle: "normal",
          }}
        >
          Mis dominios
        </Typography>
      </Grid2>
      <Grid2 container size={8} alignContent="center">
        <Paper
          component="form"
          sx={{
            ml: 24.01,
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Buscar dominio" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <Search />
          </IconButton>
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          ></IconButton>
        </Paper>
        <Button variant="contained">Buscar</Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "secondary.main" }}
          onClick={handleOpenAddDomain}
        >
          Añadir dominio
        </Button>
        <CAddDomainDialog
          openAddDomainDialog={openAddDomainDialog}
          handleCloseAddDomainDialog={handleCloseAddDomainDialog}
        />
      </Grid2>
    </Grid2>
  );
};
