import { EmojiFlags, Rule } from "@mui/icons-material";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import CookieRounded from "@mui/icons-material/CookieRounded";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  ImageList,
  ImageListItem,
  Toolbar,
  Typography,
} from "@mui/material";

export const HomePage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <AppBar
            position="static"
            elevation={0.9}
            sx={{ backgroundColor: "white" }}
          >
            <Toolbar disableGutters>
              <CookieRounded
                fontSize="large"
                sx={{ color: "secondary.main", rotate: "45deg" }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{ color: "secondary.main" }}
              >
                Cookie
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, color: "primary.main" }}
              >
                Manager
              </Typography>

              <Button
                variant="outlined"
                size="large"
                href="/auth/login"
                sx={{
                  bgcolor: "secondary.main",
                  height: 52,
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    bgcolor: "white",
                    color: "secondary.main",
                    borderColor: "secondary.main",
                  },
                }}
              >
                INICIAR SESIÓN
              </Button>
            </Toolbar>
          </AppBar>
        </Container>
      </Box>

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
      <Box>
        <Grid2 container>
          <Container>
            <Grid2 sx={{ bgcolor: "white", padding: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontStyle: "normal",
                  fontSize: "40px",
                }}
              >
                CookieManager te ayuda a gestionar las cookies y rastradores en
                tu sitio web para poder cumplir con la privacidad
              </Typography>
            </Grid2>
            <Grid2 container sx={{ pb: 10 }}>
              <Card sx={{ minWidth: 275, width: 350, mr: 4 }}>
                <CardContent>
                  <EmojiFlags
                    sx={{ fontSize: 50, color: "secondary.main", ml: 15 }}
                  />
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Control total de cookies y rastreadores
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 3, fontSize: "16px" }}>
                    El potente escáner de Usercentrics comprueba tu sitio web
                    mensualmente para identificar las cookies y tecnologías de
                    seguimiento que estás usando, las categoriza automáticamente
                    y las bloquea hasta que los visitantes den su
                    consentimiento.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 275, width: 350, mr: 4 }}>
                <CardContent>
                  <Rule
                    sx={{ fontSize: 50, color: "secondary.main", ml: 15 }}
                  />
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Recopilación de consentimientos de confianza
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 3, fontSize: "16px" }}>
                    Empieza a recopilar consentimientos en tu sitio web de
                    inmediato con una de nuestras plantillas o diseña fácilmente
                    tu propio banner de cookies. Provee transparencia a tus
                    usuarios sobre cómo se recopilan sus datos y con qué
                    propósitos.
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 275, width: 350, mr: 4 }}>
                <CardContent>
                  <AdminPanelSettings
                    sx={{
                      fontSize: 50,
                      color: "secondary.main",
                      ml: 15,
                    }}
                  />
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Almacenamiento seguro de los consentimientos
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 3, fontSize: "16px" }}>
                    Disfruta de la tranquilidad de cumplir con la privacidad en
                    tu sitio web en todo momento gracias a nuestros informes de
                    cookies y panel de consentimiento. Los consentimientos se
                    almacenan por hasta 12 meses y los registros están
                    disponibles en caso de auditorías de protección de datos o
                    peticiones de acceso de sujetos de datos.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Container>
        </Grid2>
      </Box>
    </>
  );
};
