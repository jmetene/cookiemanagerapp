import { Box, Grid2, TextField } from "@mui/material";
import PropTypes from "prop-types";
export const DialogForm = ({
  domainName,
  domainUrl,
  ownerName,
  ownerEmail,
  domainDesc,
  onEditDomainChange,
}) => {
  return (
    <Box>
      <Grid2 container direction={"row"}>
        <Box sx={{ width: 775, mt: 2 }}>
          <TextField
            autoFocus
            required
            name="domainName"
            value={domainName}
            label="Nombre de dominio"
            placeholder="dominio.com"
            type="text"
            onChange={onEditDomainChange}
            sx={{ width: 378, mr: 2 }}
          />
          <TextField
            autoFocus
            required
            placeholder="https://www.dominio.com"
            name="domainUrl"
            value={domainUrl}
            label="Url dominio"
            type="text"
            onChange={onEditDomainChange}
            sx={{ width: 378 }}
          />
        </Box>
        <Box sx={{ width: 775, mt: 1 }}>
          <TextField
            autoFocus
            required
            name="ownerName"
            value={ownerName}
            label="Nombre propietario"
            type="text"
            onChange={onEditDomainChange}
            sx={{ width: 378, mr: 2 }}
          />
          <TextField
            autoFocus
            required
            name="ownerEmail"
            value={ownerEmail}
            label="Correo electrónico"
            type="email"
            onChange={onEditDomainChange}
            sx={{ width: 378 }}
          />
        </Box>
        <Box sx={{ width: 775, mt: 1 }}>
          <TextField
            autoFocus
            name="domainDesc"
            value={domainDesc}
            label="Descripción"
            type="text"
            fullWidth
            multiline
            rows={4}
            onChange={onEditDomainChange}
          />
        </Box>
      </Grid2>
    </Box>
  );
};

DialogForm.propTypes = {
  domainName: PropTypes.string,
  domainUrl: PropTypes.string,
  ownerName: PropTypes.string,
  ownerEmail: PropTypes.string,
  domainDesc: PropTypes.string,
  onEditDomainChange: PropTypes.func,
};
