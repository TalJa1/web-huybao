import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { bellIcon, settingIcon } from "../../assets/iconSVG";

const HomeRightComponent = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Header />
      <Main />
    </Box>
  );
};

const Main: React.FC = () => {
  return (
    <Box>
      <Grid container sx={{ margin: "10px 0" }}>
        <Grid container size={10}>
          <Grid
            size={12}
            sx={{ color: "black", fontSize: "24", fontWeight: "700" }}
          >
            Đang hoạt động
          </Grid>
          <Grid
            sx={{ color: "#818181", fontSize: "14", fontWeight: "400" }}
            size={12}
          >
            456 học sinh
          </Grid>
        </Grid>
        <Grid
          size={2}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            sx={{
              backgroundColor: "#1568B1",
              color: "white",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "40px",
            }}
          >
            +
          </Button>
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

export default HomeRightComponent;
