import PropTypes from "prop-types";
import { Footer, NavBar } from "../components";

export const DomainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

DomainLayout.propTypes = {
  children: PropTypes.node,
};
