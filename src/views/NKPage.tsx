import React, { useState } from "react";
import TopLayout from "../components/TopLayout";
import { Box, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { clubs } from "../services/renderData";

const NKPage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  const statusOptions = ["ĐÃ ĐẾN LỚP", "VẮNG", "ĐI MUỘN"];

  const [clubData, setClubData] = useState<{
    [key: string]: (typeof clubs)[keyof typeof clubs];
  }>(clubs);

  const handleStatusChange = (
    clubName: string,
    studentId: string,
    newStatus: string
  ) => {
    setClubData((prevData) => {
      const updatedClubs = { ...prevData };
      const club = updatedClubs[clubName];
      const student = club.students.find((s) => s.id === studentId);
      if (student) {
        student.status = newStatus;
      }
      return updatedClubs;
    });
  };
  return (
    <Box>
      {/* NK */}
      <Box sx={{ marginTop: 2, padding: "20px" }}>
        {Object.entries(clubData).map(([clubName, club]) => (
          <Box key={clubName} sx={{ marginBottom: 4 }}>
            <Box sx={{ color: "#EE7223", fontSize: "24px", marginBottom: 2 }}>
              {club.name}
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Tên</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Trạng thái
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {club.students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>
                        <Select
                          value={student.status}
                          onChange={(e) =>
                            handleStatusChange(
                              clubName,
                              student.id,
                              e.target.value as string
                            )
                          }
                        >
                          {statusOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NKPage;
