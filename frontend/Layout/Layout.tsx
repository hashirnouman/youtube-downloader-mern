import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";
type Props = {
  children: any;
};
const LayoutWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  height: 100%;
`;
const Layout = ({ children }: Props) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
