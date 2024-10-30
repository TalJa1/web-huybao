import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import StudentPage from "./views/StudentPage";
import TeacherPage from "./views/TeacherPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentPage />} />
        <Route path="/teachers" element={<TeacherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
