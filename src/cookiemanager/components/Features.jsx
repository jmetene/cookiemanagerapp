import { Box, Container, Grid2 } from "@mui/material";
import { FeatureHeader } from "./FeatureHeader";
import { FeatureCard } from "./FeatureCard";
import { getFeatures } from "../utils/getFeatures";

export const Features = () => {
  const features = getFeatures();
  return (
    <Box>
      <Grid2 container>
        <Container>
          <FeatureHeader />
          <Grid2 container sx={{ pb: 10 }}>
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </Grid2>
        </Container>
      </Grid2>
    </Box>
  );
};
