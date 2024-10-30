import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import TopLayout from "../components/TopLayout";
import {
  bellIcon,
  chivsthuIcon,
  foodFeeIcon,
  settingIcon,
  studentSVG,
  teacherIcon,
} from "../assets/iconSVG";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FinancePage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Chi",
        data: [65, 59, 70, 81, 56, 55, 40, 45, 60, 70, 75, 60],
        borderColor: "#FCC43E",
        backgroundColor: "#FCC43E",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Thu",
        data: [28, 48, 40, 19, 76, 27, 70, 65, 60, 50, 45, 30],
        borderColor: "#FB7D5B",
        backgroundColor: "#FB7D5B",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: false,
        text: "Phân tích tài chính",
      },
    },
  };
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
        <Grid size={{ md: 3, xs: 12 }} container alignItems="center">
          <Grid size={3}>
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
          <Grid size={9}>
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
        <Grid size={{ md: 3, xs: 12 }} container alignItems="center">
          <Grid size={3}>
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
          <Grid size={9}>
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
        <Grid size={{ md: 6, xs: 12 }} container alignItems="center">
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
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                1.200.000.000
                <img
                  alt=""
                  src={require("../assets/finance/g1.png")}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    marginLeft: "10px",
                  }}
                />
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
      <Box
        sx={{
          marginTop: "20px",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "20px",
        }}
      >
        <Grid container sx={{ marginY: 2 }}>
          <Grid size={6}>
            <Box sx={{ color: "#000000", fontSize: "24px", fontWeight: "700" }}>
              Phân tích tài chính
            </Box>
          </Grid>
          <Grid
            size={6}
            display="flex"
            justifyContent="flex-end"
            sx={{ columnGap: "10px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: "5px",
                }}
              >
                {chivsthuIcon({ color: "#FCC43E" })}
                <Box sx={{ color: "#818181" }}>Chi</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: "5px",
                }}
              >
                {chivsthuIcon({ color: "#EE7223" })}{" "}
                <Box sx={{ color: "#818181" }}>Thu</Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                border: "2px solid #1568B1",
                borderRadius: "30px",
                padding: "5px 10px",
              }}
            >
              <Box sx={{ color: "#1568B1", marginRight: "10px" }}>
                Theo tháng
              </Box>
              <ArrowDropDownIcon sx={{ color: "#1568B1" }} />
            </Box>
          </Grid>
        </Grid>
        <Line data={data} options={options} />
      </Box>
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
