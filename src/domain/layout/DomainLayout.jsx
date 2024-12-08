import PropTypes from "prop-types";
import { Footer, NavBar } from "../components";
import { useAuthStore } from "../../hooks";

export const DomainLayout = ({ children }) => {
  const { startLogout, user } = useAuthStore();

  return (
    <>
      <NavBar startLogout={startLogout} user={user} />
      {children}
      <Footer />
    </>
  );
};

DomainLayout.propTypes = {
  children: PropTypes.node,
};
