import React from "react";
import { H1, P1 } from "./Typography";
import styled from "styled-components";
type Props = {};
const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Number1 = styled.div`
  font-family: "Garet", sans-serif;
  font-size: 45px;
  margin: 0 5px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.green};
`;
const Number2 = styled.div`
  font-family: garet;
  font-size: 45px;
  margin: 0 5px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.yellow};
`;
const Number3 = styled.div`
  font-family: "Garet", sans-serif;
  font-size: 45px;
  margin: 0 5px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.white};
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Steps = (props: Props) => {
  return (
    <div>
      <H1 size={17.7}>
        It&apos;s so simple, you can download your videos and audios in three
        easy steps
      </H1>
      <br />
      <Flex>
        <NumberWrapper>
          <Number1>1</Number1>
          <P1>
            Search by name or directly paste the <br /> link of video you want
            to convert
          </P1>
        </NumberWrapper>
        <NumberWrapper>
          <Number2>2</Number2>
          <P1>
            Search by name or directly paste the <br /> link of video you want
            to convert
          </P1>
        </NumberWrapper>
        <NumberWrapper>
          <Number3>3</Number3>
          <P1>
            Search by name or directly paste the <br /> link of video you want
            to convert
          </P1>
        </NumberWrapper>
      </Flex>
      <br />
    </div>
  );
};

export default Steps;
