import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Link } from "@fluentui/react-components";
interface NavLinkProps {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <RouterNavLink to={to}>
      {({ isActive }) => (
        <Link className={isActive ? "active-link" : "link"}>{children}</Link>
      )}
    </RouterNavLink>
  );
};

export default NavLink;
