import { CookieRounded } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import { CMenu } from "./CMenu";

export const NavBar = () => {
  const pages = ["Mis dominios", "Soporte", "FAQ"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <AppBar
          position="static"
          elevation={0}
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
              sx={{ flexGrow: 0.1, color: "primary.main" }}
            >
              Manager
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "primary.main", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <CMenu />
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};
