import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Box } from "@mui/material";
import { homeSVG, studentSVG } from "../assets/iconSVG";

const TopLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        style={{
          backgroundColor: "#1568B1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            icon={homeSVG({ width: 40, height: 40, color: "white" })}
          >
            Tổng quan
          </MenuItem>
          <MenuItem
            component={<Link to="/" />}
            icon={studentSVG({ width: 40, height: 40, color: "white" })}
          >
            Học sinh
          </MenuItem>
          <MenuItem component={<Link to="/" />}>Giáo viên</MenuItem>
          <MenuItem component={<Link to="/" />}>Tài chính</MenuItem>
          <MenuItem component={<Link to="/" />}>Bữa ăn</MenuItem>
          <MenuItem component={<Link to="/" />}>Người dùng</MenuItem>
          <MenuItem component={<Link to="/" />}>Tin nhắn</MenuItem>
        </Menu>
      </Sidebar>
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
};

export default TopLayout;
