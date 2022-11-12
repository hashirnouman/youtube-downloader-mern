import styled from "styled-components";
import logo from "../public/logo-2.png";
const NavbarWrapper = styled.nav`
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 5px 6.65px 0.35px rgba(0, 0, 0, 0.06);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
`;
const NavLink = styled.div`
  font-size: 15px;
  color: rgb(45, 62, 80);
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
import React from "react";
import Image from "next/image";
import { CheckBox, CheckBoxLabel, LanguageButton } from "../components/Button";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavbarWrapper>
      <Image src={logo} alt="logo" width={170} />
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
