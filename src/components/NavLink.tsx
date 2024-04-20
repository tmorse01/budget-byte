import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import {
  makeStyles,
  tokens,
  typographyStyles,
} from "@fluentui/react-components";

interface NavLinkProps {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}

const useStyles = makeStyles({
  title3: typographyStyles.title3,
  link: {
    color: tokens.colorBrandForegroundLink,
    textDecorationLine: "none",
  },
  activeLink: {
    color: tokens.colorBrandForegroundLinkPressed,
    textDecorationLine: "underline",
  },
});

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const classes = useStyles();
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `${classes.title3} ${classes.link} ${isActive && classes.activeLink}`
      }
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
