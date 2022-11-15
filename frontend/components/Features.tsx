import React from "react";
import { H1 } from "./Typography";
import styled from "styled-components";
import Image from "next/image";
import quick from "../public/quick-download.png";
import unlimited from "../public/unlimited-downloads.png";
import free from "../public/free-downloads.png";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Feature = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  text-align: center;
  font-family: "Arial Black", sans-serif;
  color: ${(props) => props.theme.colors.featureText};
  font-weight: 900;
  padding: 5px;
`;
export const Text = styled.div`
  text-align: center;
  font-size: 15px;
  color: ${(props) => props.theme.colors.text};
`;
type Props = {};
const Features = (props: Props) => {
  return (
    <div>
      <H1 size={17.7}>Our youtube downloader converter best features</H1>
      <br />
      <Wrapper>
        <Feature>
          <Image src={quick} alt="quick download" width={40} />
          <Title>Quick & Easy Downloads</Title>
          <Text>
            Fully Compatible With all Browsers <br /> & Devices
          </Text>
        </Feature>
        <Feature>
          <Image src={unlimited} alt="quick download" width={40} />
          <Title>Unlimited Downloads</Title>
          <Text>
            Unlimited Downloads & Conversions <br /> Registration is not
            required
          </Text>
        </Feature>
        <Feature>
          <Image src={free} alt="quick download" width={40} />
          <Title>Free Downloading</Title>
          <Text>
            It is free. You can save as many <br /> audio, video files as you
            want.
          </Text>
        </Feature>
      </Wrapper>
    </div>
  );
};

export default Features;
