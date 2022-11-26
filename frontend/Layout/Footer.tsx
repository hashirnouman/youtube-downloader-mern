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
  gap: 2em;
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
`;
const FooterLink = styled.div`
  font-size: 20px;
  font-family: "Arial Black", sans-serif;
  color: ${(props) => props.theme.colors.main};
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 10px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
  }
`;
const CopyRight = styled.p`
  font-size: 18px;

  color: ${(props) => props.theme.colors.main};
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 12px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
  }
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
        <CopyRight>&copy;2022 yts1.co | All Rights Reserved.</CopyRight>
      </Center>
    </>
  );
};

export default Footer;
