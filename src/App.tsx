import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
