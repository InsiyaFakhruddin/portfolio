// src/App.jsx
import React from "react";
import Projects from "./Projects";
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-center my-6">My AI Projects</h1>
      <Projects />
    </div>
  );
}

export default App;
