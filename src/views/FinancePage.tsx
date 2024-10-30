import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import TopLayout from "../components/TopLayout";
import {
  bellIcon,
  foodFeeIcon,
  settingIcon,
  studentSVG,
  teacherIcon,
} from "../assets/iconSVG";

const FinancePage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container>
        <Grid size={8}>
          <Box sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}>
            Tài chính
          </Box>
        </Grid>
        <Grid size={4}>
          <Header />
        </Grid>
      </Grid>
      <Grid
        size={12}
        container
        sx={{
          marginY: "10px",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <Grid size={{ md: 4, xs: 12 }} container alignItems="center">
          <Grid size={2}>
            <Box
              sx={{
                backgroundColor: "#1568B1",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
              }}
            >
              {studentSVG({ width: 30, height: 30, color: "white" })}
            </Box>
          </Grid>
          <Grid size={10}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "#818181", fontSize: 18 }}>Học sinh</Box>
              <Box sx={{ fontSize: 36, fontWeight: "700", color: "black" }}>
                932
              </Box>
              <Box
                sx={{
                  fontSize: 18,
                  color: "#818181",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box sx={{ color: "#27B24A" }}>+5</Box> học sinh mới
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }} container alignItems="center">
          <Grid size={2}>
            <Box
              sx={{
                backgroundColor: "#EE7223",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
              }}
            >
              {teacherIcon({ width: 30, height: 30, color: "white" })}
            </Box>
          </Grid>
          <Grid size={10}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "#818181", fontSize: 18 }}>Giáo viên</Box>
              <Box sx={{ fontSize: 36, fontWeight: "700", color: "black" }}>
                234
              </Box>
              <Box
                sx={{
                  fontSize: 18,
                  color: "#818181",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box sx={{ color: "#EE7223" }}>-2</Box> giáo viên
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }} container alignItems="center">
          <Grid size={2}>
            <Box
              sx={{
                backgroundColor: "#FCC43E",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 50,
              }}
            >
              {foodFeeIcon({ width: 30, height: 30, color: "white" })}
            </Box>
          </Grid>
          <Grid size={10}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ color: "#818181", fontSize: 18 }}>Quỹ trường</Box>
              <Box
                sx={{
                  fontSize: 36,
                  fontWeight: "700",
                  color: "black",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  width: "100%",
                }}
              >
                1.200.000.000
              </Box>
              <Box
                sx={{
                  fontSize: 18,
                  color: "#818181",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box sx={{ color: "#27B24A" }}>+10% </Box> quỹ so với tháng
                trước
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const Header: React.FC = () => {
  return (
    <Grid container size={12} display={"flex"} alignItems={"center"}>
      <Grid size={2}>{bellIcon({})}</Grid>
      <Grid size={2}>{settingIcon({})}</Grid>
      <Grid size={8} container>
        <Grid
          size={6}
          display="flex"
          flexDirection="column"
          alignItems={"flex-end"}
        >
          <Grid sx={{ color: "#000000" }}>Thu Hiền</Grid>
          <Grid sx={{ color: "#818181" }}>Admin</Grid>
        </Grid>
        <Grid size={6} display={"flex"} justifyContent={"center"}>
          <img
            style={{ width: "50px", height: "50px" }}
            alt=""
            src={require("../assets/home/avatar.png")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FinancePage;