import React from "react";
// import component
import Navbar from "./Navbar";
import Footer from "./Footer";
// styled component
import { LayoutWrapper } from "../styles/styledComponents";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
