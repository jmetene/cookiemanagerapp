import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { DomainLayout } from "../layout/DomainLayout";
import { useAuthStore } from "../../hooks";
import { ArrowBack } from "@mui/icons-material";

export const UserPage = () => {
  const { user } = useAuthStore();
  return (
    <DomainLayout>
      <Grid2
        container
        direction="column"
        sx={{ backgroundColor: "#F5F7F8", padding: 5 }}
      >
        <Container>
          <Box>
            <Grid2 container spacing={2}>
              <Grid2 size={8} alignContent="center">
                <Button size="small" startIcon={<ArrowBack />} href="/domains">
                  Profile | {user.name}
                </Button>
              </Grid2>
              <Grid2 container size={4} alignContent="center">
                <Button
                  variant="contained"
                  sx={{ bgcolor: "secondary.main", ml: 25 }}
                  //   onClick={handleOpenAddCookie}
                >
                  Gestionar planes
                </Button>
              </Grid2>
            </Grid2>
          </Box>
          <Box sx={{ mt: 4 }}>
            <Typography>Datos del usuario</Typography>
          </Box>
        </Container>
      </Grid2>
    </DomainLayout>
  );
};
