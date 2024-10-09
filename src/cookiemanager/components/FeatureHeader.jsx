import { Grid2, Typography } from "@mui/material";

export const FeatureHeader = () => {
  return (
    <Grid2 sx={{ bgcolor: "white", padding: 6 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "40px",
        }}
      >
        CookieManager te ayuda a gestionar las cookies y rastradores en tu sitio
        web para poder cumplir con la privacidad
      </Typography>
    </Grid2>
  );
};
