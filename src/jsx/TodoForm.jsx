import StyleToDoForm from "../css/StyleToDoForm";
const { useState } = require("react");

function ToDOList(props) {
  const [className, setClassname] = useState(false);
  return (
    <StyleToDoForm>
      <input
        type="checkbox"
        className="check"
        onClick={() => {
          setClassname((prev) => !prev);
        }}
      />
      <p className={`${className ? "complete" : ""}`}>{props.toDo}</p>
      <span
        className="delete"
        onClick={(e) => {
          let a = props.todo.filter((i) => i.key != props.num);
          props.setToDo(a);
        }}
      >
        ×
      </span>
    </StyleToDoForm>
  );
}

export default ToDOList;
