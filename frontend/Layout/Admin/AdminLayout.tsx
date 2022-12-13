import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Sidebar } from "../Sidebar";
import { light } from "../../my-theme";
type Props = {
  children: React.ReactNode;
};
const Flex = styled.div`
  display: flex;
`;
const AdminLayout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={light}>
      <Flex>
        <Sidebar />
        <>{children}</>
      </Flex>
    </ThemeProvider>
  );
};

export default AdminLayout;
