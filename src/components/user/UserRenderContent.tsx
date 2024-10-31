import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UserContactData, UserMessageData } from "../../services/renderData";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid2";

const UserRenderContent: React.FC<{
  label: string;
  des: string;
  data: number;
}> = ({ data, des, label }) => {
  const [renderData, setRenderData] = useState<any[]>([]);

  useEffect(() => {
    switch (data) {
      case 0:
        setRenderData(UserContactData);
        break;
      case 1:
        setRenderData(UserMessageData);
        break;
    }
  }, [data]);

  return (
    <Box sx={{ padding: "10px" }}>
      <Grid container>
        <Grid size={9}>
          <Box>
            <Box sx={{ fontSize: "20px", fontWeight: "bold" }}>{label}</Box>
            <Box sx={{ color: "#818181", fontSize: "18px", marginTop: "5px" }}>
              {des}
            </Box>
          </Box>
        </Grid>
        <Grid
          size={3}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {/* circle button color blue with content is + */}
          <Button
            sx={{
              backgroundColor: "#1568B1",
              color: "white",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              fontSize: "30px",
              minWidth: "50px",
            }}
          >
            +
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ marginY: "20px" }}>
        <TextField
          variant="outlined"
          placeholder="Tìm kiếm"
          sx={{
            backgroundColor: "white",
            borderRadius: "30px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
            style: {
              backgroundColor: "white",
              borderRadius: "200px",
            },
          }}
          fullWidth
        />
      </Box>
      <Box>
        <Button
        fullWidth
          sx={{
            backgroundColor: "#000000",
            color: "white",
            paddingY: "10px",
            borderRadius: "50px",
          }}
        >
          Xem thêm
        </Button>
      </Box>
    </Box>
  );
};

export default UserRenderContent;
