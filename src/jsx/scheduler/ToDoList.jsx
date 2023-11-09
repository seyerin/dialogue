import { useEffect, useState } from "react";
import StyleToDoForm from "../../css/scheduler/StyleToDoForm";
function ToDoList(props) {
  const [className, setClassname] = useState(false);

  let toDoArr = "";
  if (localStorage.getItem("scheduler")) {
    toDoArr = JSON.parse(localStorage.getItem("scheduler"))[0][
      "day" + new Date().getDate()
    ].toDo.toDoComplete;
  }
  // if (props.complete.current.length > 0) {
  props.complete.current.map((x, y) => {
    let arr = toDoArr.filter((i) => i != null);
    console.log(toDoArr);
    if (arr[y] == true) {
      return (x.checked = true);
    } else {
      return (x.checked = false);
    }
  });
  // }
  return (
    <StyleToDoForm>
      <input
        ref={(ref) => (props.complete.current[props.num] = ref)}
        type="checkbox"
        className="check"
        onClick={() => {
          setClassname((prev) => !prev);
          props.setToDoComplete((prev) => {
            let temp = [...prev];
            temp[props.num] = `${temp[props.num] == "true" ? false : true}`;
            console.log(temp);
            return temp;
          });
        }}
      />
      <p className={`${className ? "complete" : ""}`}>{props.toDo}</p>
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
