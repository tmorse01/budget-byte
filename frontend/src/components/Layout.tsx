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

  const handleLogin = (username: string, password: string) => {
    console.log(
      "Logging in with username:",
      username,
      "and password ",
      password
    );
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Login successful", response);
        } else {
          console.log("Login failed", response);
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <FluentProvider theme={webLightTheme}>
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
        <LoginDialog onLogin={handleLogin} />
      </div>
      <Outlet />
    </FluentProvider>
  );
};

export default Layout;
