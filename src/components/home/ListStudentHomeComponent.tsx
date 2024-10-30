import React, { useState } from "react";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  Pagination,
} from "@mui/material";
import { extendedHomeListStudent } from "../../services/renderData";

const ListStudentHomeComponent = () => {
  const [selectedClass, setSelectedClass] = useState<string>("11a1");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const studentsPerPage = 5;

  const handleClassChange = (event: SelectChangeEvent<string>) => {
    setSelectedClass(event.target.value);
    setCurrentPage(1); // Reset to first page when class changes
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const filteredStudents = extendedHomeListStudent.filter(
    (student) => student.class === selectedClass
  );

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Danh sách học sinh
      </Typography>
      <Select
        value={selectedClass}
        onChange={handleClassChange}
        displayEmpty
        sx={{ marginBottom: 2 }}
      >
        {Array.from(new Set(extendedHomeListStudent.map((student) => student.class))).map((className) => (
          <MenuItem key={className} value={className}>
            {className}
          </MenuItem>
        ))}
      </Select>
      <Box>
        {currentStudents.map((student) => (
          <Box
            key={student.id}
            sx={{ marginBottom: 1, padding: 1, border: "1px solid #ccc" }}
          >
            <Typography variant="h6">{student.name}</Typography>
            <Typography>ID: {student.id}</Typography>
            <Typography>Class: {student.class}</Typography>
            <Typography>Fee: {student.fee}</Typography>
          </Box>
        ))}
      </Box>
      <Pagination
        count={Math.ceil(filteredStudents.length / studentsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ marginTop: 2 }}
      />
    </Box>
  );
};

export default ListStudentHomeComponent;
