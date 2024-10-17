import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const CCardImplementation = ({
  title = "",
  description = "",
  firstButtonTitle = "Ver instrucciones",
  secondButtonTitle = "Saber más",
}) => {
  return (
    <Box sx={{ width: 300, mr: 1 }}>
      <Card sx={{ bgcolor: "#F5F7F8" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{firstButtonTitle}</Button>
          <Button size="small">{secondButtonTitle}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

CCardImplementation.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  firstButtonTitle: PropTypes.string,
  secondButtonTitle: PropTypes.string,
};
