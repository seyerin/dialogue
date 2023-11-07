import { useState } from "react";
import Calender from "./jsx/calender/Calender";
import Diary from "./jsx/diary/Diary";
import Scheduler from "./jsx/scheduler/Scheduler";
import "./css/header.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
function App() {
  const nowDate = new Date();
  const [now, setNow] = useState(
    String(nowDate.getFullYear()) +
      String(nowDate.getMonth() + 1) +
      String(nowDate.getDate())
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calender now={now} setNow={setNow} />} />
        <Route path="/Diary" element={<Diary now={now} />} />
        <Route path="/Scheduler" element={<Scheduler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
