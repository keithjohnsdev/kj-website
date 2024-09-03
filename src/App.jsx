import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Resume from "./views/Resume";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default App;
