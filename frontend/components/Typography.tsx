import styled from "styled-components";
export const H1 = styled("div")<{ size: number }>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.theme.colors.main};
  font-family: "Arial Black", sans-serif;
  text-align: center;
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;
  }
`;
export const P1 = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.main};
  text-align: center;
  line-height: 1.323;
  a {
    color: ${(props) => props.theme.colors.link};
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 10px;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
  }
`;
