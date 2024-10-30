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
} from "@mui/material";
import TopLayout from "../components/TopLayout";
import { StudentList } from "../services/renderData";
import Grid from "@mui/material/Grid2";

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
        <Grid size={12}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by name or ID"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid size={12}>
          <Select
            fullWidth
            value={selectedClass}
            onChange={handleClassChange}
            displayEmpty
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
        <Grid size={12} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary">
            + New Student
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: "white", padding: "10px", borderRadius: '10px' }}>
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
