import { useAuthStore } from "../../hooks";
import { Footer, NavBar, MainSection } from "../components";

export const DomainPage = () => {
  const { startLogout, user } = useAuthStore();

  return (
    <>
      <NavBar startLogout={startLogout} user={user} />
      <MainSection />
      <Footer />
    </>
  );
};
