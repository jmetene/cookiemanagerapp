import PropTypes from "prop-types";
import { Grid2 } from "@mui/material";
import { CardDetail } from "../components/CardDetail";

export const DomainDescriptionTabView = ({ cards = [] }) => {
  return (
    <Grid2 container sx={{ pb: 10, pt: 4, pl: 12 }}>
      {cards.map((card) => (
        <CardDetail
          key={card.id}
          title={card.title}
          description={card.description}
          buttonTitle={card.buttonTitle}
        />
      ))}
    </Grid2>
  );
};

DomainDescriptionTabView.propTypes = {
  cards: PropTypes.array,
};
