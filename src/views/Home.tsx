import React from "react";
import TopLayout from "../components/TopLayout";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  return <Box>Home</Box>;
};

export default Home;
