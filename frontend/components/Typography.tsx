import styled from "styled-components";
export const H1 = styled("div")<{ size: number }>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.theme.colors.main};
  font-family: "Arial Black", sans-serif;
  text-align: center;
`;
export const P1 = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  line-height: 1.323;
  a {
    color: ${(props) => props.theme.colors.blue};
  }
`;
