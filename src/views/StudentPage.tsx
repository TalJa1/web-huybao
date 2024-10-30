import React, { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  SelectChangeEvent,
  Pagination,
  InputAdornment,
} from "@mui/material";
import TopLayout from "../components/TopLayout";
import { StudentList } from "../services/renderData";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";

const StudentPage = () => {
  return (
    <TopLayout>
      <Main />
    </TopLayout>
  );
};

const Main: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const studentsPerPage = 5;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleClassChange = (event: SelectChangeEvent<string>) => {
    setSelectedClass(event.target.value as string);
    setCurrentPage(1); // Reset to first page when class changes
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const students = StudentList; // Add this line to define students
  const filteredStudents = students.filter((student) => {
    const matchesSearchQuery =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.includes(searchQuery);
    const matchesClass =
      selectedClass === "All" || student.class === selectedClass;
    return matchesSearchQuery && matchesClass;
  });

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  return (
    <Box sx={{ padding: "20px" }}>
      <Box
        sx={{
          color: "#000000",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "20px",
        }}
      >
        Học sinh
      </Box>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ marginBottom: "20px" }}
      >
        <Grid size={6}>
          <TextField
            variant="outlined"
            placeholder="Tìm kiếm"
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              },
            }}
            sx={{
              width: "50%",
              backgroundColor: "white",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
            }}
          />
        </Grid>
        <Grid size={6} container>
          <Grid size={8} display="flex" justifyContent="flex-end">
            <Select
              fullWidth
              value={selectedClass}
              onChange={handleClassChange}
              displayEmpty
              sx={{
                width: "50%",
                backgroundColor: "white",
                borderRadius: "30px",
                borderColor: "#1568B1",
              }}
            >
              <MenuItem value="All">All Classes</MenuItem>
              {Array.from(
                new Set(StudentList.map((student) => student.class))
              ).map((className) => (
                <MenuItem key={className} value={className}>
                  {className}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid size={4} display="flex" justifyContent="flex-end">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ borderRadius: "40px" }}
            >
              + New Student
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{ backgroundColor: "white", padding: "10px", borderRadius: "10px" }}
      >
        {currentStudents.map((student) => (
          <Box
            key={student.id}
            sx={{
              marginBottom: 2,
              padding: 2,
            }}
          >
            <Typography variant="h6">{student.name}</Typography>
            <Typography>ID: {student.id}</Typography>
            <Typography>DOB: {student.dob}</Typography>
            <Typography>Parent: {student.parentName}</Typography>
            <Typography>Hometown: {student.hometown}</Typography>
            <Typography>Class: {student.class}</Typography>
          </Box>
        ))}
      </Box>
      <Box display="flex" justifyContent="center" sx={{ marginTop: 2 }}>
        <Pagination
          count={Math.ceil(filteredStudents.length / studentsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default StudentPage;
