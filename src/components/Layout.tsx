import * as React from "react";
import { Outlet } from "react-router-dom";
import { webLightTheme, FluentProvider } from "@fluentui/react-components";
import NavLink from "@components/NavLink";

const Layout: React.FC = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: 10 }}>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li style={{ display: "inline", marginRight: 10 }}>
            <NavLink to="/expenses">Expenses</NavLink>
          </li>
          <li style={{ display: "inline", marginRight: 10 }}>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Placeholder for nested routes */}
    </FluentProvider>
  );
};

export default Layout;
