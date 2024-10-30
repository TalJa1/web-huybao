import React from "react";
import TopLayout from "../components/TopLayout";
import { Box, InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";

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
        <Grid size={9} container>
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
            <Grid size={4} sx={{ color: "#000000", fontSize: "24px" }}>
              Thống kê
            </Grid>
            <Grid size={4} sx={{ color: "#000000", fontSize: "24px" }}>
              Thống kê
            </Grid>
            <Grid size={4} sx={{ color: "#000000", fontSize: "24px" }}>
              Thống kê
            </Grid>
          </Grid>
        </Grid>
        <Grid size={3}></Grid>
      </Grid>
    </Box>
  );
};

export default Home;
