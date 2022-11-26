import React, { useState } from "react";
import Navbar from "./Navbar";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./Footer";
import { dark, light } from "../my-theme";

type Props = {
  children: React.ReactNode;
};
const LayoutWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;
const Layout = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <LayoutWrapper>
        <Navbar toggleTheme={toggleTheme} />
        {children}
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
