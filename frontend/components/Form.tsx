import React from "react";
import styled from "styled-components";
import { H1, P1 } from "./Typography";
import downloadIcon from "../public/download-icon.png";
import Image from "next/image";
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
const Box = styled.div`
  border-width: 1.5px;
  border-color: rgb(241, 242, 244);
  border-style: solid;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 5px 13.42px 8.58px;
  color: rgba(70, 70, 70, 0.13);
  width: 1000px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputWrapper = styled.div`
  display: table;
  border-collapse: collapse;
  width: 100%;
  display: flex;
  border-radius: 5px;
  & > div {
    border: 5px solid;
    border-color: ${(props) => props.theme.colors.main};
    vertical-align: middle; /* needed for Safari */
  }
  input {
    border: 0;
    display: block;
    width: 100%;
    padding: 8px;
    &:focus {
      outline: none;
    }
  }
`;
const InputArea = styled.div`
  width: 500px;
  height: 60px;
  border-color: ${(props) => props.theme.colors.main};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
`;
const InputIcon = styled.div`
  background: ${(props) => props.theme.colors.main};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: 900;
  cursor: pointer;
`;
type Props = {};

const Form = (props: Props) => {
  return (
    <FormWrapper>
      <Box>
        <div>
          <H1 size={25}>Youtube Downloader - Youtube Converter</H1>
          <P1>
            Download and Convert Youtube Videos in MP3, MP4, MKV, 3GP, & many
            more formats.
          </P1>
          <br />

          <InputWrapper>
            <InputArea>
              <input placeholder="Search or Paster Video Link Here" />
            </InputArea>
            <InputIcon>
              Download &nbsp;
              <span>
                <Image src={downloadIcon} alt="download icon" width={20} />{" "}
              </span>{" "}
            </InputIcon>
          </InputWrapper>
          <P1>
            By using our service you are accepting our &nbsp;
            <a href="">Privacy Policy</a> and &nbsp;
            <a href="">Terms of Use.</a>
          </P1>
        </div>
      </Box>
    </FormWrapper>
  );
};

export default Form;
