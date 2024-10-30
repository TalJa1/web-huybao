import { Box } from "@mui/material";
import React from "react";
import TopLayout from "../components/TopLayout";

const FinancePage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  return <Box sx={{ padding: "20px" }}></Box>;
};

export default FinancePage;
