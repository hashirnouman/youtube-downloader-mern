import React from "react";
import styled from "styled-components";
import { H1, P1 } from "./Typography";
import downloadIcon from "../public/download-icon.png";
import Image from "next/image";
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
`;
const Box = styled.div`
  border-width: 1.5px;
  border-color: ${(props) => props.theme.colors.outline};
  border-style: solid;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.boxBg};
  box-shadow: 0px 5px 13.42px 8.58px;
  color: ${(props) => props.theme.colors.shadowBg};
  margin-top: 120px;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  @media screen and (min-width: 200px) and (max-width: 480px) {
    height: 200px;
    width: 90%;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    height: 250px;
    width: 90%;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 300px;
    width: 90%;
  }
`;
 const InputWrapper = styled.div`
  display: table;
  border-collapse: collapse;
  width: 70%;
  display: flex;
  border-radius: 5px;
  & > div {
    border: 5px solid;
    border-color: ${(props) => props.theme.colors.border};
    vertical-align: middle;
  }
  input {
    border: 0;
    display: block;
    min-width: 100%;
    padding: 8px;
    background-color: #e5e9f4;
    &:focus {
      outline: none;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 10px;
    width: 90%;
    padding: 5px;
    & > div {
      border: 3px solid;
      border-color: ${(props) => props.theme.colors.border};
      vertical-align: middle;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
    width: 90%;
  }
`;
const InputArea = styled.div`
  width: 100%;
  height: 60px;
  border-color: ${(props) => props.theme.colors.outline};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 40px;
  }
`;
const DownloadButton = styled.div`
  background: ${(props) => props.theme.colors.button};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: 900;
  cursor: pointer;
  gap: 0.5em;
`;
type Props = {};

const Form = (props: Props) => {
  return (
    <FormWrapper>
      <Box>
        <H1 size={25}>Youtube Downloader - Youtube Converter</H1>
        <P1>
          Download and Convert Youtube Videos in MP3, MP4, MKV, 3GP, & many more
          formats.
        </P1>
        <InputWrapper>
          <InputArea>
            <input placeholder="Search or Paster Video Link Here" />
          </InputArea>
          <DownloadButton>
            <div>Download</div>
            <Image src={downloadIcon} alt="download icon" width={13} />
          </DownloadButton>
        </InputWrapper>
        <P1>
          By using our service you are accepting our &nbsp;
          <a href="">Privacy Policy</a> and &nbsp;
          <a href="">Terms of Use.</a>
        </P1>
      </Box>
    </FormWrapper>
  );
};

export default Form;
