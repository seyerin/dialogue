import Calender from "./jsx/calender/Calender";
import Diary from "./jsx/diary/Diary";
import "./css/header.css";
import ToDo from "./jsx/scheduler/Todo";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calender />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
