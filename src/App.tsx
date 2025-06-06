// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// instead of BrowserRouter
// At the top of App.tsx
import './index.css'; // or wherever your global styles are
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

// function App() {
//   return <h1>Hello from React!</h1>;
// }


export default App;
