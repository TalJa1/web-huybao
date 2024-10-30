import { Box } from "@mui/material";
import React from "react";
import TopLayout from "../components/TopLayout";

const StudentPage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  return <Box sx={{ padding: "20px" }}>sdfsdf</Box>;
};

export default StudentPage;
