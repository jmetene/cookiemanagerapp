import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const CardDetail = ({
  title = "",
  description = "",
  buttonTitle = "",
}) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        width: 300,
        mr: 3,
        mt: 2,
        bgcolor: "#F5F5F7",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body" sx={{ color: "primary.main" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          sx={{
            color: "primary.main",
            "&:hover": {
              bgcolor: "white",
              color: "secondary.main",
              borderColor: "primary.main",
            },
          }}
          variant="text"
        >
          {buttonTitle}
        </Button>
      </CardActions>
    </Card>
  );
};

CardDetail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonTitle: PropTypes.string,
  actions: PropTypes.array,
};
