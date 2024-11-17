import { BsList } from "react-icons/bs";

interface SidebarHeaderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

function SidebarHeader({ collapsed, setCollapsed }: SidebarHeaderProps) {
  return (
    <>
      {!collapsed && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid black",
            minHeight: "100px",
          }}
        >
          <h3 style={{ display: "inline-block", margin: "1rem" }}>
            TaskMinder
          </h3>

          <div
            onClick={() => setCollapsed((current) => !current)}
            style={{ cursor: "pointer" }}
          >
            <BsList style={{ margin: "1rem" }} />
          </div>
        </div>
      )}
      {collapsed && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: "1px solid black",
            minHeight: "100px",
            cursor: "pointer",
          }}
          onClick={() => setCollapsed((current) => !current)}
        >
          <BsList style={{ margin: "1rem" }} />
        </div>
      )}
    </>
  );
}

export default SidebarHeader;
