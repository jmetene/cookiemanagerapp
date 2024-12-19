import PropTypes from "prop-types";
import { Grid2 } from "@mui/material";
import { CardDetail } from "../components/CardDetail";
import { generateCards } from "../utils/generateCards";
import { useEffect } from "react";
import { useDomainStore } from "../../hooks/useDomainStore";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const DomainDescriptionTabView = ({ domain = {}, user = {} }) => {
  // Recuperamos del hook de domain store la funcionalidad para cargar el banner
  const { banner, startLoadingBanner, isLoadingCookieBanner } =
    useDomainStore();
  // State para manegar el estado del banner
  const [cookieBanner, setCookieBanner] = useState({});
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoadingCookieBanner) {
      startLoadingBanner(domain.id);
    }
  }, [domain.id]);

  useEffect(() => {
    if (!isLoadingCookieBanner) {
      setCookieBanner(banner);
    }
  }, [banner, isLoadingCookieBanner]);

  // Función para geenerar las tarjetas con los detalles del dominio
  const cards = generateCards(domain, cookieBanner, user);

  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 12 }}>
      {cards.map(
        (card) =>
          card.title && (
            <CardDetail
              key={card.id}
              title={card.title}
              description={card.description}
              buttonTitle={card.buttonTitle}
            />
          )
      )}
    </Grid2>
  );
};

DomainDescriptionTabView.propTypes = {
  domain: PropTypes.shape({
    totalCookies: PropTypes.number,
    lastCookieScan: PropTypes.string, // Se espera un string en formato ISO
  }),
  user: PropTypes.shape({
    plan: PropTypes.string,
  }),
};
