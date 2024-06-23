import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

//npm install @mui/material @emotion/react @emotion/styled
//npm install react-router-dom
// npm start
