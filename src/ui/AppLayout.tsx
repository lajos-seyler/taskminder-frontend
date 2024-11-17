import { Outlet } from "react-router-dom";
import styled from "styled-components";

import TaskMinderSidebar from "./Sidebar";

const StyledAppLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const StyledOutlet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <TaskMinderSidebar />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledAppLayout>
  );
}

export default AppLayout;
