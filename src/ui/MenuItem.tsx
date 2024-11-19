import { PropsWithChildren, ReactNode } from "react";
import { MenuItem as DefaultMenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

interface MenuItemProps extends PropsWithChildren {
  icon: ReactNode;
  linkTo?: string;
  onClick?: () => void;
}

function MenuItem({ icon, linkTo, onClick, children }: MenuItemProps) {
  const location = useLocation();

  return (
    <DefaultMenuItem
      icon={icon}
      {...(linkTo && { component: <Link to={linkTo} /> })}
      style={{
        borderRight:
          location.pathname === linkTo ? "4px solid var(--dark-blue)" : "none",
      }}
      onClick={onClick}
    >
      {children}
    </DefaultMenuItem>
  );
}

export default MenuItem;
