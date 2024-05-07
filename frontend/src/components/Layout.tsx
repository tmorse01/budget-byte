import * as React from "react";
import { Outlet } from "react-router-dom";
import {
  webLightTheme,
  FluentProvider,
  shorthands,
} from "@fluentui/react-components";
import { makeStyles } from "@griffel/react";
import NavLink from "@components/NavLink";

const useStyles = makeStyles({
  navBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  navLinks: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...shorthands.margin("0", "0", "0", "0"),
    ...shorthands.padding("0", "0", "0", "0"),
  },
  navLinkItem: {
    display: "inline",
    marginRight: "10px",
  },
});

const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <nav className={classes.navBar}>
        <ul className={classes.navLinks}>
          <li className={classes.navLinkItem}>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li className={classes.navLinkItem}>
            <NavLink to="/expenses">Expenses</NavLink>
          </li>
          <li className={classes.navLinkItem}>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </FluentProvider>
  );
};

export default Layout;
