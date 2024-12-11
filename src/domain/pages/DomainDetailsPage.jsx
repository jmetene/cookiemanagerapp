import PropTypes from "prop-types";
import { Box, Button, Container, Grid2 } from "@mui/material";
import { DomainTabs } from "../components/DomainTabs";
import { ArrowBack } from "@mui/icons-material";
import { useDomainStore } from "../../hooks/useDomainStore";
import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { DomainLayout } from "../layout/DomainLayout";
import { useAuthStore } from "../../hooks";

export const DomainDetailsPage = () => {
  const { id } = useParams();
  const { domains, errorMessage, startLoadingDomains } = useDomainStore();
  const { user } = useAuthStore();

  const [loading, setLoading] = useState(true); // estado de carga
  const [domain, setDomain] = useState(null);

  // Este estado se está controlando en el componente
  // DomainTabs que centraliza la funcionalidad de saber
  // en cada momento qué Tab está activa
  const [activeTab, setActiveTab] = useState(0);

  // Cargar dominios al montar el componente
  useEffect(() => {
    if (domains.length === 0) {
      startLoadingDomains().then(() => setLoading(false));
    } else {
      setLoading(false); // Si ya hay dominios cargados, no es necesario recargar
    }
  }, [domains.length, startLoadingDomains]);

  useEffect(() => {
    // Si los dominios ya están cargados, encuentra el dominio correspondiente
    if (!loading && domains.length > 0) {
      const currentDomain = domains.find(
        (element) => element.id === parseInt(id, 10)
      );
      setDomain(currentDomain);
    }
    // startLoadingDomains();
  }, [loading, id, domains]);

  useEffect(() => {
    // Guardar el valor de activeTab en el localStorage cada vez que cambie
    if (activeTab !== undefined) {
      localStorage.setItem("activeTabIndex", activeTab);
    }
  }, [activeTab]);

  useEffect(() => {
    // Manejo de errores en la carga
    if (errorMessage !== undefined) {
      Swal.fire(
        "Error al cargar los detalles del dominio",
        errorMessage,
        "error"
      );
    }
  }, [errorMessage]);

  // Si no existe el id o es incorrecto
  // TODO: No funciona, revisarlo
  if (!id) {
    return <Navigate to="/" />;
  }

  if (loading) {
    // Mostrar un mensaje de carga mientras se obtienen los datos
    return <p>Cargando detalles del dominio...</p>;
  }

  if (!domain) {
    return <p>No se encontró el dominio con ID {id}.</p>;
  }

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
                  DETALLES | {domain.nombre}
                </Button>
              </Grid2>
              <Grid2
                container
                size={4}
                alignContent="center"
                sx={{
                  display: activeTab === 4 ? "flex" : "none",
                  transition: "opacity 0.3s",
                }}
              >
                <Button
                  variant="contained"
                  sx={{ bgcolor: "secondary.main", ml: 28 }}
                >
                  Añadir cookie
                </Button>
              </Grid2>
            </Grid2>
          </Box>
          <Box sx={{ mt: 4 }}>
            <DomainTabs
              user={user}
              domain={domain}
              setActiveTab={setActiveTab}
            />
          </Box>
        </Container>
      </Grid2>
    </DomainLayout>
  );
};

DomainDetailsPage.propTypes = {
  domain: PropTypes.bool,
  onViewDomainDetails: PropTypes.func,
};
