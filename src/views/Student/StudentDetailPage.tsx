import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import TopLayout from "../../components/TopLayout";
import {
  bellIcon,
  locationIcon,
  mail1Icon,
  phone1Icon,
  settingIcon,
  threeDotsIcon,
} from "../../assets/iconSVG";
import { useLocation } from "react-router";
import { Student } from "../../services/typeProps";
import RenderRightComponent from "../../components/teacher&student/RenderRightComponent";

const StudentDetailPage = () => {
  const location = useLocation();
  const { student } = location.state as { student: Student };
  return (
    <TopLayout>
      <Main student={student} />
    </TopLayout>
  );
};

const Main: React.FC<{ student: Student }> = ({ student }) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container>
        <Grid size={8}>
          <Box sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}>
            Thông tin học sinh
          </Box>
        </Grid>
        <Grid size={4}>
          <Header />
        </Grid>
      </Grid>
      <Grid container columnSpacing={2} sx={{ marginTop: "20px" }}>
        <Grid size={{ md: 8, xs: 12 }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100px",
                backgroundColor: "#1568B1",
              }}
            />
            <Box sx={{ position: "relative", height: "80px" }}>
              <img
                alt=""
                src={require("../../assets/home/1.png")}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "3px solid white",
                  position: "absolute",
                  top: "-50px",
                  borderRadius: "100%",
                  left: "20px",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                }}
              >
                {threeDotsIcon({})}
              </Box>
            </Box>
            <Box sx={{ padding: "0 20px", paddingBottom: "20px" }}>
              <Box>
                <Box
                  sx={{ color: "black", fontSize: "32px", fontWeight: "700" }}
                >
                  {student.name}
                </Box>
                <Box sx={{ color: "#818181", fontSize: "18px" }}>
                  {student.id}
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <RenderRightComponent
            label={"Lịch học"}
            subject={"Math"}
            color={"#EE7223"}
          />
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
            src={require("../../assets/home/avatar.png")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StudentDetailPage;
