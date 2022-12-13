import styled from "styled-components";

export const Sidebar = styled.div`
  color: black;
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: 850ms all;
  background-color: ${(props) => props.theme.colors.blue};
  padding: 10px;
`;
