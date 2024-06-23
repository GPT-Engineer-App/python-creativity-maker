import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blank from "./pages/Blank.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Blank />} />
      </Routes>
    </Router>
  );
}

export default App;
