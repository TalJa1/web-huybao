import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import TopLayout from "../../components/TopLayout";
import { bellIcon, settingIcon } from "../../assets/iconSVG";
import MealRightRendering from "../../components/meal/MealRightRendering";
import { useLocation } from "react-router";
import { MealDataProps } from "../../services/typeProps";

const MealDetail = () => {
  const location = useLocation();
  const { meal } = location.state as { meal: any };

  return (
    <TopLayout>
      <Main meal={meal} />
    </TopLayout>
  );
};

const Main: React.FC<{ meal: MealDataProps }> = ({ meal }) => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container>
        <Grid size={8}>
          <Box sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}>
            Thông tin món ăn
          </Box>
        </Grid>
        <Grid size={4}>
          <Header />
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={{ md: 9, xs: 12 }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "10px",
              marginTop: "50px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#25ABE1",
                width: "300px",
                height: "200px",
                borderRadius: "10px",
                marginRight: "20px",
              }}
            />
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Chip label={meal.catergory} color="primary" />
                <Typography variant="body1">Phí sản xuất</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {meal.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#000000" }}
                >
                  đ28.340
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#818181" }}>
                Đây là mô tả giả cho món ăn này. Món ăn này rất ngon và bổ
                dưỡng, phù hợp cho mọi lứa tuổi.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <MealRightRendering />
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
export default MealDetail;
