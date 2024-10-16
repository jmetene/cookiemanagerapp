import { Box, Divider, Grid2 } from "@mui/material";
import {
  CButtonsSettingsField,
  CCategoriesSettingsField,
  CGeneralSettingsField,
  CLenguageSettingsField,
  CRegionalSettingsField,
} from "../components";

export const SettingPage = () => {
  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 10, pr: 10 }}>
      <Box>
        <form>
          {/** General */}
          <CGeneralSettingsField />
          <Divider sx={{ mt: 2, mb: 2 }} />
          {/**Configuración Regional */}
          <CRegionalSettingsField />
          <Divider sx={{ mt: 2, mb: 2 }} />
          {/**Idiomas */}
          <CLenguageSettingsField />
          <Divider sx={{ mt: 2, mb: 2 }} />
          {/**Categorías */}
          <CCategoriesSettingsField />
          <Divider sx={{ mt: 2, mb: 2 }} />
          {/**Botones */}
          <CButtonsSettingsField />
        </form>
      </Box>
    </Grid2>
  );
};
