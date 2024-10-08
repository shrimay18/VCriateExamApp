import "./App.css";
import Start from "./pages/Start/start";
import Exam from "./pages/Exam/exam";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </Router>
  );
}

export default App;
