import React from "react";
import styled from "styled-components";
type Props = {};
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    justify-content: space-evenly;
  }
`;
const FooterLink = styled.div`
  font-size: 15px;
  font-family: "Arial Black", sans-serif;
  color: ${(props) => props.theme.colors.main};
  margin: 15px;
`;
const Footer = (props: Props) => {
  return (
    <>
      <Center>
        <FooterWrapper>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>FAQ</FooterLink>
          <FooterLink>Terms of Service</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterWrapper>
        <p>&copy;2022 yts1.co | All Rights Reserved.</p>
      </Center>
    </>
  );
};

export default Footer;
