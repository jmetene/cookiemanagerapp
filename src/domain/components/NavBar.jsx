import { CookieRounded, Logout, Settings } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const NavBar = () => {
  const pages = ["Mis dominios", "Soporte", "FAQ"];
  const settings = [
    { title: "Settings", icon: "Setting" },
    { title: "Logout", icon: "Logout" },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "primary.main", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Ver mi perfil">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Jonh Doe" src="src/assets/img/avatar.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.title}
                    onClick={handleCloseUserMenu}
                    sx={{ color: "secondary.main" }}
                  >
                    <ListItemIcon>
                      {setting.icon === "Logout" ? (
                        <Logout
                          fontSize="small"
                          sx={{ color: "secondary.main" }}
                        />
                      ) : (
                        <Settings
                          fontSize="small"
                          sx={{ color: "secondary.main" }}
                        />
                      )}
                    </ListItemIcon>
                    {setting.title}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
};
