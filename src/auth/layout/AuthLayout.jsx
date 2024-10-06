import { CookieRounded } from "@mui/icons-material";
import { Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "", description = "" }) => {
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid2 container>
        <CookieRounded
          fontSize="large"
          sx={{
            mb: 1,
            mt: 3,
            mr: 0.2,
            color: "secondary.main",
            rotate: "45deg",
          }}
        />
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 1, mt: 3, color: "white" }}
        >
          Cookie
        </Typography>
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 3, color: "secondary.main" }}
        >
          Manager
        </Typography>
      </Grid2>
      <Grid2
        className="box-shadow"
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { md: 420 },
        }}
      >
        <Typography variant="h4" align="center" sx={{ mt: 1 }}>
          {title}
        </Typography>
        <Grid2 sx={{ mt: 3 }}>
          <Typography variant="body1" align="center" sx={{ mb: 1 }}>
            {description}
          </Typography>
        </Grid2>
        {children}
      </Grid2>
    </Grid2>
  );
};
