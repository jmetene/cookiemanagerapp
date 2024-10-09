import {
  Box,
  Button,
  Container,
  Grid2,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

export const MainInfo = () => {
  return (
    <Grid2
      container
      direction="column"
      sx={{ backgroundColor: "primary.main", padding: 5 }}
    >
      <Container>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
          <Grid2 container size={12} sx={{ width: 600 }}>
            <Typography
              variant="h3"
              align="left"
              sx={{
                mb: 1,
                mt: 3,
                color: "secondary.main",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "40px",
                textTransform: "uppercase",
              }}
            >
              Gestión de consentimientos simplificada
            </Typography>
            <Grid2 sx={{ width: 550 }}>
              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontStyle: "normal",
                  color: "white",
                  fontWeight: 400,
                  fontSize: "20px",
                }}
              >
                CookieManager proporciona todo lo necesario para empezar a
                recoger el consentimiento de los visitantes, incluyendo un
                escáner automátivo de cookies, una interfaz de usuario
                personalizable y varios métodos de integración.
              </Typography>
            </Grid2>
            <Grid2 sx={{ width: 350 }}>
              <Typography
                variant="h5"
                sx={{
                  mt: 2,
                  mb: 4,
                  fontStyle: "normal",
                  color: "white",
                  fontWeight: 400,
                  fontSize: "20px",
                }}
              >
                ¿Todavía no tienes cuenta?
              </Typography>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                sx={{
                  bgcolor: "secondary.main",
                  height: 52,
                  borderWidth: "1px",
                  color: "white",
                  "&:hover": {
                    bgcolor: "white",
                    color: "secondary.main",
                    borderColor: "secondary.main",
                  },
                }}
                href="/auth/register"
              >
                Crear una cuenta
              </Button>
            </Grid2>
          </Grid2>
          <Grid2 container size={12} sx={{ width: 600 }}>
            <Grid2>
              <ImageList sx={{ width: 550 }} cols={1}>
                <ImageListItem>
                  <img
                    src="src/assets/img/cb-welcome-image.svg"
                    alt="welcome-image"
                    loading="lazy"
                  />
                </ImageListItem>
              </ImageList>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Grid2>
  );
};
