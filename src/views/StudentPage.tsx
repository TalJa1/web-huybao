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
  return (
    <Box sx={{ padding: "20px" }}>
      <Box sx={{ color: "#000000", fontSize: "36px", fontWeight: "700" }}>
        Học sinh
      </Box>
    </Box>
  );
};

export default StudentPage;
