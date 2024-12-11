import PropTypes from "prop-types";
import { Grid2 } from "@mui/material";
import { CardDetail } from "../components/CardDetail";
import { generateCards } from "../utils/generateCards";

export const DomainDescriptionTabView = ({ domain = {}, user = {} }) => {
  const cards = generateCards(domain, user);

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
