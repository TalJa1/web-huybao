import React from "react";
import TopLayout from "../components/TopLayout";
import { Box, InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import { studentSVG, teacherIcon } from "../assets/iconSVG";

const Home = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{md: 9, xs: 12}} container>
          <Grid size={12} container sx={{ alignItems: "center" }}>
            <Grid
              size={8}
              sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}
            >
              Tổng quan
            </Grid>
            <Grid size={4}>
              <TextField
                variant="outlined"
                placeholder="Tìm kiếm"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  style: {
                    backgroundColor: "white",
                    borderRadius: "200px",
                  },
                }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid size={12} container>
            <Grid size={{ md: 4, xs: 12 }} container alignItems="center">
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
                    100
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid size={{ md: 4, xs: 12 }} container alignItems="center">
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
                </Box>
              </Grid>
            </Grid>
            <Grid size={{ md: 4, xs: 12 }} container alignItems="center">
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
                  <Box sx={{ color: "#818181", fontSize: 18 }}>Phí ăn</Box>
                  <Box sx={{ fontSize: 36, fontWeight: "700", color: "black" }}>
                    đ32.000.000
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{md: 3, xs: 12}}></Grid>
      </Grid>
    </Box>
  );
};

export default Home;
