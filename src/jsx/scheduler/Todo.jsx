import { useState } from "react";
import ToDoList from "../scheduler2/TodoForm";
import StyleToDo from "../../css/scheduler/StyleToDo";
function ToDo() {
  const [todo, setTodo] = useState([]);
  return (
    <>
      <StyleToDo>
        <form action="" className="toDoForm">
          <div className="todoBox">
            {todo.map((t) => (
              <ToDoList key={t.key} />
            ))}
          </div>
          <input
            type="text"
            placeholder="write your todo"
            className="toDoInput"
            maxLength={16}
          />
        </form>
      </StyleToDo>
    </>
  );
}

export default ToDo;
