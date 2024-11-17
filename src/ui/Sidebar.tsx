import { useState } from "react";
import {
  BsArrowRightSquare,
  BsFillGearFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";
import { BsListTask } from "react-icons/bs";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SidebarHeader from "./SidebarHeader";

const StyledSidebar = styled(Sidebar)`
  height: 100%;
`;

function TaskMinderSidebar() {
  const [collapsed, setCollapsed] = useState(false);

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
          <MenuItem
            icon={<BsFillHouseDoorFill />}
            component={<Link to="/app" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem icon={<BsListTask />} component={<Link to="/app/tasks" />}>
            Tasks
          </MenuItem>
        </Menu>
      </div>
      <Menu>
        <MenuItem icon={<BsFillGearFill />}>Settings</MenuItem>
        <MenuItem icon={<BsArrowRightSquare />}>Logout</MenuItem>
      </Menu>
    </StyledSidebar>
  );
}

export default TaskMinderSidebar;
