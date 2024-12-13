import {
  Box,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";

export const CCookieForm = ({
  cookieName,
  cookieType,
  description,
  provider,
  duration,
  sameSite,
  //   httpOnly,
  secure,
  onAddCookieChange,
}) => {
  return (
    <Box>
      <Grid2 container direction={"row"}>
        <Box sx={{ width: 775, mt: 2 }}>
          <TextField
            autoFocus
            required
            name="cookieName"
            value={cookieName}
            label="Nombre de la cookie"
            placeholder="_ga"
            type="text"
            onChange={onAddCookieChange}
            sx={{ width: 378, mr: 2 }}
          />
          <FormControl sx={{ width: 378 }} size="medium">
            <InputLabel id="select-label">Tipo</InputLabel>
            <Select
              label="Tipo"
              onChange={onAddCookieChange}
              name="cookieType"
              value={cookieType}
            >
              <MenuItem value="Esencial">Esencial</MenuItem>
              <MenuItem value="Opcional">Opcional</MenuItem>
              <MenuItem value="Tercero">Tercero</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 775, mt: 1 }}>
          <TextField
            autoFocus
            required
            name="provider"
            value={provider}
            label="Proveedor de la cookie"
            placeholder="Facebook"
            type="text"
            onChange={onAddCookieChange}
            sx={{ width: 378, mr: 2 }}
          />
          <TextField
            autoFocus
            required
            name="duration"
            value={duration}
            label="Duración de la cookie"
            type="text"
            onChange={onAddCookieChange}
            sx={{ width: 378 }}
          />
        </Box>
        <Box sx={{ width: 775, mt: 1 }}>
          <FormControl sx={{ mt: 1, mr: 2, width: 378 }} size="medium">
            <InputLabel id="select-label">Same Site</InputLabel>
            <Select
              label="Same Site"
              onChange={onAddCookieChange}
              name="sameSite"
              value={sameSite}
            >
              <MenuItem value="Strict">Strict</MenuItem>
              <MenuItem value="Lax">Lax</MenuItem>
              <MenuItem value="None">None</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ mt: 1, width: 378 }} size="medium">
            <InputLabel id="select-label">Secure</InputLabel>
            <Select
              label="Secure"
              onChange={onAddCookieChange}
              name="secure"
              value={secure}
            >
              <MenuItem value="S">Segura</MenuItem>
              <MenuItem value="N">Insegura</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 775, mt: 1 }}>
          <TextField
            autoFocus
            name="description"
            value={description}
            label="Descripción"
            type="text"
            fullWidth
            multiline
            rows={4}
            onChange={onAddCookieChange}
          />
        </Box>
      </Grid2>
    </Box>
  );
};

CCookieForm.propTypes = {
  cookieName: PropTypes.string,
  cookieType: PropTypes.string,
  description: PropTypes.string,
  provider: PropTypes.string,
  duration: PropTypes.string,
  sameSite: PropTypes.string,
  //   httpOnly: PropTypes.string,
  secure: PropTypes.string,
  onAddCookieChange: PropTypes.func,
};
