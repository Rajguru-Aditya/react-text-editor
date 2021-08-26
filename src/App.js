import React, { useState } from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setText(text.toUpperCase());
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TextArea heading="Enter your text below..." />
      </div>
    </div>
  );
}

export default App;
