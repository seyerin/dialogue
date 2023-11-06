import Calender from "./jsx/calender/Calender";
import Diary from "./jsx/diary/Diary";
import Scheduler from "./jsx/scheduler/Scheduler";
import "./css/header.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calender />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Scheduler" element={<Scheduler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
