import PropTypes from "prop-types";
import { Grid2 } from "@mui/material";
import { CardDetail } from "../components/CardDetail";
import { generateCards } from "../utils/generateCards";
import { useEffect } from "react";
import { useDomainStore } from "../../hooks/useDomainStore";
import { useState } from "react";

export const DomainDescriptionTabView = ({ domain = {}, user = {} }) => {
  // Recuperamos del hook de domain store la funcionalidad para cargar el banner
  const { banner, startLoadingBanner, isLoadingCookieBanner } =
    useDomainStore();
  // State to manage the banner status
  const [cookieBanner, setCookieBanner] = useState({});

  useEffect(() => {
    if (isLoadingCookieBanner) {
      startLoadingBanner(domain.id);
    }
  }, [domain.id, isLoadingCookieBanner, startLoadingBanner]);

  useEffect(() => {
    if (!isLoadingCookieBanner) {
      setCookieBanner(banner);
    }
  }, [banner, isLoadingCookieBanner]);

  // Function to generate cards with domain details
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
  user: PropTypes.object,
  domain: PropTypes.object,
};
