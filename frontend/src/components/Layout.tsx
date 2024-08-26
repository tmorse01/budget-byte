import * as React from "react";
import { Outlet } from "react-router-dom";
import {
  webLightTheme,
  FluentProvider,
  shorthands,
  tokens,
  makeStyles,
} from "@fluentui/react-components";
import NavLink from "@components/NavLink";
import LoginDialog from "./LoginDialog";
import { ToastProvider } from "@/contexts/ToastContext";

const useStyles = makeStyles({
  header: {
    backgroundColor: tokens["colorNeutralBackground4"],
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "48px",
    ...shorthands.padding("16px", "16px", "16px", "16px"),
  },
  navBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navLinks: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...shorthands.gap("16px", "16px"),
    ...shorthands.margin("0", "0", "0", "0"),
    ...shorthands.padding("0", "0", "0", "0"),
  },
  navLinkItem: {
    display: "inline",
    marginRight: "10px",
  },
  loginDialog: {
    align: "right",
  },
});

const Layout: React.FC = () => {
  const classes = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <ToastProvider>
        <div className={classes.header}>
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
          <LoginDialog />
        </div>
        <Outlet />
      </ToastProvider>
    </FluentProvider>
  );
};

export default Layout;
