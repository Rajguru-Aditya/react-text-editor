import React, { useState } from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2D3F50";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextArea mode={mode} heading="Enter your text below..." />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
