// import "./App.css";
import Navbar from "./components/Navbar";
// import TextArea from "./components/TextArea";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {/* <TextArea heading="Enter your text below..." /> */}
        <About />
      </div>
    </div>
  );
}

export default App;
