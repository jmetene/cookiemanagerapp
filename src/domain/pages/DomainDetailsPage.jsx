import { Box, Button, Container, Grid2 } from "@mui/material";
import { Footer, NavBar } from "../components";
import { DomainTabs } from "../components/DomainTabs";
import { ArrowBack } from "@mui/icons-material";

export const DomainDetailsPage = () => {
  return (
    <>
      <NavBar />
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
                  Editar dominio | marca.com
                </Button>
              </Grid2>
              <Grid2 container size={4} alignContent="center">
                <Button
                  variant="contained"
                  sx={{ bgcolor: "secondary.main", ml: 28 }}
                >
                  Editar dominio
                </Button>
              </Grid2>
            </Grid2>
          </Box>
          <Box sx={{ mt: 4 }}>
            <DomainTabs />
          </Box>
        </Container>
      </Grid2>
      <Footer />
    </>
  );
};
