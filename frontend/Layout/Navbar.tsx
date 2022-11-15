import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { CheckBox, CheckBoxLabel, LanguageButton } from "../components/Button";
import logo from "../public/logo.png";
const NavbarWrapper = styled.nav`
  background-color: ${(props) => props.theme.colors.navbar};
  box-shadow: 0px 5px 6.65px 0.35px rgba(0, 0, 0, 0.06);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  position: fixed;
  top: 0;
  width: 100%;
`;
const NavLink = styled.div`
  font-size: 15px;
  color: ${(props) => props.theme.colors.navText};
  font-family: "Arial Black", sans-serif;
  font-weight: bold;
  line-height: 1.323;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex: 0.4;
`;
const Logo = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
  font-family: "Arial Black", sans-serif;
  color: ${(props) => props.theme.colors.main};
`;
type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavbarWrapper>
      <Logo>
        <Image src={logo} alt="logo" width={50} />
        &nbsp; Yts1.co
      </Logo>
      <NavLink>Youtube Downloader</NavLink>
      <NavLink>Youtube To Mp3 Converter</NavLink>
      <ButtonWrapper>
        <CheckBox id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox"></CheckBoxLabel>
        <LanguageButton>English</LanguageButton>
      </ButtonWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
