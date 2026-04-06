import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import About from "./pages/About";

function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>📒 Notes App</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/notes">Notes</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;