import { AppRoutes } from "./routes/AppRoutes";
import { AppTheme } from "./theme/AppTheme";

export const CookieManagerApp = () => {
  return (
    <>
      <AppTheme>
        <AppRoutes />
      </AppTheme>
    </>
  );
};
