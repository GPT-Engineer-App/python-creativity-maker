import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blank from "./pages/Blank.jsx";
import AboutMe from "./pages/AboutMe.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Blank />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
