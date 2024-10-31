import Grid from "@mui/material/Grid2";
import React from "react";
import { bellIcon, settingIcon } from "../../assets/iconSVG";
import { Box, Button } from "@mui/material";
import { mealHomeList } from "../../services/renderData";

const UserRightRendering = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Header />
      <Main />
    </Box>
  );
};

const Main: React.FC = () => {
  return (
    <Box sx={{ marginTop: 2 }}>
      <Box sx={{ color: "#363B64", fontSize: "24px", fontWeight: "700" }}>
        Thực đơn gần đây
      </Box>
      <Box>
        {mealHomeList.map((meal, index) => {
          return (
            <Grid container key={index} sx={{ rowGap: 2, marginY: 2 }}>
              <img alt="" src={meal.img} style={{ width: "100%" }} />
              <Box
                sx={{
                  color: "#363B64",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                {meal.name}
              </Box>
            </Grid>
          );
        })}
      </Box>
      <Button
        sx={{
          marginY: 2,
          backgroundColor: "black",
          color: "white",
          borderRadius: 10,
          paddingY: 1.5,
          width: "100%",
        }}
      >
        Xem thêm
      </Button>
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
            style={{ width: "40px", height: "40px" }}
            alt=""
            src={require("../../assets/home/avatar.png")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserRightRendering;
