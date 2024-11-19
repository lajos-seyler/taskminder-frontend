import { useState } from "react";
import {
  BsArrowRightSquare,
  BsFillGearFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { BsListTask } from "react-icons/bs";
import { Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
import styled from "styled-components";

import { useLogout } from "../features/users/hooks/useLogout";
import MenuItem from "./MenuItem";
import SidebarHeader from "./SidebarHeader";

const StyledSidebar = styled(Sidebar)`
  height: 100%;
`;

function TaskMinderSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useLogout();

  return (
    <StyledSidebar
      collapsed={collapsed}
      width={"300px"}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "white",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <div>
        <SidebarHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Menu>
          <MenuItem icon={<BsFillHouseDoorFill />} linkTo="/app">
            Dashboard
          </MenuItem>
          <MenuItem icon={<BsListTask />} linkTo="/app/tasks">
            Tasks
          </MenuItem>
        </Menu>
      </div>
      <Menu>
        <MenuItem icon={<BsFillGearFill />}>Settings</MenuItem>
        <MenuItem icon={<BsArrowRightSquare />} onClick={() => logout()}>
          Logout
        </MenuItem>
      </Menu>
    </StyledSidebar>
  );
}

export default TaskMinderSidebar;
