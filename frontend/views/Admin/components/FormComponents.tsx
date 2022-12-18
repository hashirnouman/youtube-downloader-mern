import styled from "styled-components";

export const Input = styled.input`
  border: 0;
  display: block;
  min-width: 200%;
  border-radius: 5px;
  padding: 8px;
  background-color: white;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    font-size: 10px;
    width: 90%;
    padding: 5px;
    & > div {
      border: 3px solid;
      border-color: ${(props: { theme: { colors: { border: any } } }) =>
        props.theme.colors.border};
      vertical-align: middle;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
    width: 90%;
  }
`;
export const Button = styled.button`
  background: blue;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: 900;
  cursor: pointer;
  gap: 0.5em;
`;
