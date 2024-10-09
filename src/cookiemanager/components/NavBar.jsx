import { CookieRounded } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

export const NavBar = () => {
  return (
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
  );
};
