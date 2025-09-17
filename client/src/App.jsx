import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import Share from "./pages/Share";
import Retrieve from "./pages/Retrieve";
import About from "./pages/About";
import Footer from "./components/Footer"

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/share" element={<Share />} />
          <Route path="/retrieve" element={<Retrieve/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}
