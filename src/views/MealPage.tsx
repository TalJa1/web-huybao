import { Box, Chip, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import TopLayout from "../components/TopLayout";
import {
  bellIcon,
  chartIcon,
  likeIcon,
  settingIcon,
  starIcon,
  threeDotsIcon,
} from "../assets/iconSVG";
import { MealData } from "../services/renderData";

const MealPage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const mealsPerPage = 5;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = MealData.slice(indexOfFirstMeal, indexOfLastMeal);

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container>
        <Grid size={8}>
          <Box sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}>
            Bữa ăn
          </Box>
        </Grid>
        <Grid size={4}>
          <Header />
        </Grid>
      </Grid>
      {/* Render here */}
      <Box sx={{ marginTop: "20px" }}>
        {currentMeals.map((meal, index) => (
          <Grid
            container
            key={index}
            sx={{
              marginBottom: 2,
              padding: 2,
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Grid size={1} display="flex" justifyContent="center">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#25ABE1",
                  borderRadius: "10px",
                }}
              />
            </Grid>
            <Grid size={2}>
              <Typography>
                <Chip
                  label={meal.catergory}
                  sx={{ fontSize: "14px" }}
                  color="primary"
                />
              </Typography>
              <Box sx={{ fontSize: "24px", fontWeight: "700", color: "black" }}>
                {meal.name}
              </Box>
            </Grid>
            <Grid size={2} display="flex" alignItems="center">
              {starIcon({})}
              <Box
                sx={{
                  marginLeft: 1,
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                {meal.star}
              </Box>
            </Grid>
            <Grid size={2} display="flex" alignItems="center">
              {chartIcon({})}
              <Box
                sx={{
                  marginLeft: 1,
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                {meal.order}
              </Box>
            </Grid>
            <Grid size={2} display="flex" alignItems="center">
              {likeIcon({})}
              <Typography
                sx={{
                  marginLeft: 1,
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "black",
                }}
              >
                {meal.like}%
              </Typography>
            </Grid>
            <Grid size={1} display="flex" justifyContent="flex-end">
              {threeDotsIcon({})}
            </Grid>
          </Grid>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
        <Pagination
          count={Math.ceil(MealData.length / mealsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
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
export default MealPage;
