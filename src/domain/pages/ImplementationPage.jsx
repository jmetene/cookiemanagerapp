import { Box, Grid2, Typography } from "@mui/material";
import { CCardImplementation } from "../components/CCardImplementation";

const implementationsModes = [
  {
    title: "Google Tag Manager",
    description:
      "CookieManager proporciona una plantilla de Google Tag Manager con soporte incorporado de Google Consent Mode para una implementación fácil y sin problemas.",
  },
  {
    title: "WordPress plugin",
    description:
      "CookieManager provee un plugin de Wordpress para hacer la implementación a su Wordpress. El plugin está disponible desde el repositorio de plugins de Wordpress.",
  },
  {
    title: "Instalación Manual",
    description:
      "CookieManager proporciona un script para hacer su implementación más fácil en su proyecto. Tan solo tienes que añadirlo entre las etiquestas head. Consulte el manual de integración.",
    firstButtonTitle: "Ver script",
    secondButtonTitle: "saber más...",
  },
];

export const ImplementationPage = () => {
  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 14, mr: 14 }}>
      <Box>
        <Typography variant="h5">
          Elegir el método de aplicacón adecuado
        </Typography>
        <Box sx={{ pt: 2 }}>
          <Typography variant="body">
            Implementar CookieManager en su sitio web es un paso crucial para
            garantizar la privacidad de los datos y el cumplimiento de la
            normativa. El método que elija para la implementación depende de la
            configuración de su sitio web y del sistema de gestión de contenidos
            (CSM) que esté utilizando. Es esencial implementar CookieManager
            correctamente para evitar cualquier pérdida de datos de seguimiento
            o la instalación prematura de cookies antes de obtener el
            consentimiento del usuario. Puede encontrar instrucciones detallada
            de implementación en la documentación de CookieManager.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ pt: 2 }}>
          Selecciona su método de implementación:
        </Typography>
      </Box>
      <Box sx={{ pt: 2 }}>
        <Typography variant="body">
          Puede encontra más información sobre la integración en la
          documentación de CookieManager.
        </Typography>
      </Box>
      <Grid2 container sx={{ pt: 3 }}>
        {implementationsModes.map((mode) => (
          <CCardImplementation
            key={mode.title}
            title={mode.title}
            description={mode.description}
            firstButtonTitle={mode.firstButtonTitle}
            secondButtonTitle={mode.secondButtonTitle}
          />
        ))}
      </Grid2>
    </Grid2>
  );
};
