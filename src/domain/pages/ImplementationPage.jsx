import { Box, Grid2, TextField, Typography } from "@mui/material";

export const ImplementationPage = () => {
  const code = `helm install --set-string long_int=1234567890 myredis ./redis
`;
  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 8, mr: 8 }}>
      <Box>
        <Typography variant="h5">
          Elegir el método de aplicacón adecuado
        </Typography>
        <Typography variant="body" sx={{ pt: 2 }}>
          Implementar CookieManager en su sitio web es un paso crucial para
          garantizar la privacidad de los datos y el cumplimiento de la
          normativa. El método que elija para la implementación depende de la
          configuración de su sitio web y del sistema de gestión de contenidos
          (CSM) que esté utilizando. Es esencial implementar CookieManager
          correctamente para evitar cualquier pérdida de datos de seguimiento o
          la instalación prematura de cookies antes de obtener el consentimiento
          del usuario. Puede encontrar instrucciones detallada de implementación
          en la documentación de CookieManager.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ pt: 2 }}>
          Insertar el código manualmente
        </Typography>
        <Typography variant="body" sx={{ pt: 2 }}>
          Pegue este código en su sitio web por encima de todos los demás
          script. En la sección head
        </Typography>
      </Box>
      <Box>
        <Typography variant="body" sx={{ pt: 2 }}>
          Puede encontra más información sobre la integración en la
          documentación de CookieManager.
        </Typography>
      </Box>
      <Box>
        <TextField
          fullWidth
          placeholder={code}
          id="fullWidth"
          sx={{ width: 1000, pt: 2 }}
        />
      </Box>
    </Grid2>
  );
};
