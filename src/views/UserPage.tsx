import Grid from "@mui/material/Grid2";
import React from "react";
import TopLayout from "../components/TopLayout";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";
import UserRightRendering from "../components/user/UserRightRendering";

const UserPage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  return (
    <Grid container>
      <Grid size={{ md: 9, xs: 12 }} sx={{ padding: "20px" }}>
        <Grid container display={"flex"} alignItems={"center"}>
          <Grid size={8}>
            <h1>User Dashboard</h1>
          </Grid>
          <Grid size={4}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Tìm kiếm"
              sx={{
                backgroundColor: "white",
                borderRadius: "30px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
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
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size={{ md: 3, xs: 12 }}
        sx={{
          backgroundColor: "white",
          paddingY: "20px",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <UserRightRendering />
      </Grid>
    </Grid>
  );
};

export default UserPage;
