import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </header>
    </div>
  );
}

export default App;
