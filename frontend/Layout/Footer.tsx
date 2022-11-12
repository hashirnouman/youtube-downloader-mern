import React from "react";
import styled from "styled-components";
type Props = {};
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0;
  align-items: center;
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const FooterLink = styled.div`
  font-size: 12px;
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
