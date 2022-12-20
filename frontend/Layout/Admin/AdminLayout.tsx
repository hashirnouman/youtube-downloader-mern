import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Sidebar } from "../Sidebar";
import { light } from "../../my-theme";
import { Toaster } from "react-hot-toast";
type Props = {
  children: React.ReactNode;
};
const Flex = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
`;
const SideBarText = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
const AdminLayout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={light}>
      <div>
        <Toaster />
      </div>
      <Flex>
        <div>{children}</div>
      </Flex>
    </ThemeProvider>
  );
};

export default AdminLayout;
