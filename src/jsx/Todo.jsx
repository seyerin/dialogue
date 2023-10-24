import ToDOList from "./TodoForm";
import StyleToDo from "../css/StyleToDo";
const { useState } = require("react");

function Todo(props) {
  const [counter, setCounter] = useState(0);
  const [todo, setTodo] = useState([]);
  const [className, setClassname] = useState(false);

  const enterEvent = (e) => {
    setCounter((prev) => prev + 1);
    const toDos = {
      toDo: e.target.value,
      key: counter,
    };
    if (e.key == "Enter") {
      e.preventDefault();
      setTodo([...todo, toDos]);
      e.target.value = "";
      setCounter((prev) => prev++);
    }
  };
  return (
    <>
      <StyleToDo>
        <form action="">
          <div className="todoBox">
            {todo.map((t) => (
              <ToDOList
                toDo={t.toDo}
                key={t.key}
                setToDo={setTodo}
                todo={todo}
                num={t.key}
                // className={className ? "delete" : ""}
                // setClass={setClassname}
              />
            ))}
          </div>
          <input
            type="text"
            placeholder="write your todo"
            className="toDoInput"
            onKeyPress={enterEvent}
            maxLength={16}
          />
        </form>
      </StyleToDo>
    </>
  );
}

export default Todo;
