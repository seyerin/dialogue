import Calender from "./jsx/Calender";
import Diary from "./jsx/Diary";
import "./css/header.css";
import Todo from "./jsx/Todo";
import Scheduler from "./jsx/Scheduler";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calender />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
