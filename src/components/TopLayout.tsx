import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Box } from "@mui/material";
import {
  financeIcon,
  homeSVG,
  mealIcon,
  messageIcon,
  studentSVG,
  teacherIcon,
  userIcon,
} from "../assets/iconSVG";

const TopLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeItem, setActiveItem] = useState<string>("home");

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
  };

  const getIconColor = (item: string) =>
    activeItem === item ? "#1568B1" : "white";

  const getTextStyle = (item: string) => ({
    color: getIconColor(item),
    fontSize: "18px",
    fontWeight: activeItem === item ? 700 : 400,
  });

  const getMenuItemStyle = (item: string) => ({
    ...getTextStyle(item),
    backgroundColor: activeItem === item ? "#E7F5FF" : "transparent",
    borderTopLeftRadius: activeItem === item ? "40px" : "0",
    borderBottomLeftRadius: activeItem === item ? "40px" : "0",
  });

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "#1568B1",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "100%",
          }}
        >
          <img style={{ width: "70%" }} alt="logo" src={logo} />
        </Box>
        <Menu>
          <MenuItem
            component={<Link to="/" />}
            icon={homeSVG({ color: getIconColor("home") })}
            onClick={() => handleMenuItemClick("home")}
            style={getMenuItemStyle("home")}
          >
            Tổng quan
          </MenuItem>
          <MenuItem
            component={<Link to="/students" />}
            icon={studentSVG({ color: getIconColor("students") })}
            onClick={() => handleMenuItemClick("students")}
            style={getMenuItemStyle("students")}
          >
            Học sinh
          </MenuItem>
          <MenuItem
            component={<Link to="/teachers" />}
            icon={teacherIcon({ color: getIconColor("teachers") })}
            onClick={() => handleMenuItemClick("teachers")}
            style={getMenuItemStyle("teachers")}
          >
            Giáo viên
          </MenuItem>
          <MenuItem
            component={<Link to="/finance" />}
            icon={financeIcon({ color: getIconColor("finance") })}
            onClick={() => handleMenuItemClick("finance")}
            style={getMenuItemStyle("finance")}
          >
            Tài chính
          </MenuItem>
          <MenuItem
            component={<Link to="/meals" />}
            icon={mealIcon({ color: getIconColor("meals") })}
            onClick={() => handleMenuItemClick("meals")}
            style={getMenuItemStyle("meals")}
          >
            Bữa ăn
          </MenuItem>
          <MenuItem
            component={<Link to="/users" />}
            icon={userIcon({ color: getIconColor("users") })}
            onClick={() => handleMenuItemClick("users")}
            style={getMenuItemStyle("users")}
          >
            Người dùng
          </MenuItem>
          <MenuItem
            component={<Link to="/messages" />}
            icon={messageIcon({ color: getIconColor("messages") })}
            onClick={() => handleMenuItemClick("messages")}
            style={getMenuItemStyle("messages")}
          >
            Tin nhắn
          </MenuItem>
        </Menu>
      </Sidebar>
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
};

export default TopLayout;
