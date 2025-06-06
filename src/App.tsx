import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BeginnerRoadmap from "./pages/BeginnerRoadmap";
import Connect from "./pages/Connect";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/beginner-roadmap" element={<BeginnerRoadmap />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
