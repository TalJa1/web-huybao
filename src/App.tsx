import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { IconSVG } from "./assets/iconSVG";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <IconSVG height={'5%'} width={'5%'} />
      </header>
    </div>
  );
}

export default App;
