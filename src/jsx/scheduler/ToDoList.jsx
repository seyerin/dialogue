import { useEffect, useState } from "react";
import StyleToDoForm from "../../css/scheduler/StyleToDoForm";
function ToDoList(props) {
  const [className, setClassname] = useState(false);

  return (
    <StyleToDoForm onMouseMove={props.completeFunc}>
      <input
        type="checkbox"
        className="check"
        onClick={() => {
          setClassname((prev) => !prev);
        }}
      />
      <p
        className={`${className ? "complete" : ""}`}
        ref={(ref) => (props.complete[props.y] = ref)}
      >
        {props.toDo}
      </p>
      <span
        className="delete"
        onClick={(e) => {
          let remove = props.toDoArr.filter((x) => x.key != props.num);
          props.setToDo(remove);
        }}
      >
        x
      </span>
    </StyleToDoForm>
  );
}
export default ToDoList;
