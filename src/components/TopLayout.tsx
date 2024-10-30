import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const TopLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem component={<Link to="/" />}>Documentation</MenuItem>
          <MenuItem component={<Link to="/" />}>Calendar</MenuItem>
          <MenuItem component={<Link to="/" />}>E-commerce</MenuItem>
        </Menu>
      </Sidebar>
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
};

export default TopLayout;
