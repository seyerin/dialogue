import { useEffect, useRef, useState } from "react";
import ToDoList from "../scheduler/ToDoList";
import StyleToDo from "../../css/scheduler/StyleToDo";
function ToDo(props) {
  let complete = useRef([]);
  const [counter, setCounter] = useState(() => {
    if (localStorage.getItem("scheduler")) {
      return props.scheduler[0]["day" + new Date().getDate()].toDo.toDoText
        .length;
    } else {
      return 0;
    }
  });
  // const [toDo, setToDo] = useState(() =>
  //   localStorage.getItem("scheduler")
  //     ? JSON.parse(localStorage.getItem("scheduler"))[0][
  //         "day" + new Date().getDate()
  //       ].toDo.toDoText
  //     : []
  // );
  const [toDoArr, setToDoArr] = useState([]);
  const [toDoKey, setToDoKey] = useState([]);
  // const [toDo,]
  // console.log(todo);

  // if (localStorage.getItem("scheduler")) {
  //   console.log();
  // }
  useEffect(() => {
    // console.log(counter);
    // toDo.map((x, y) =>
    //   setToDoArr((prev) => {
    //     let temp = [...prev];
    //     temp[y] = x;
    //     console.log(temp);
    //     console.log(y);
    //     return temp;
    //   })
    // );
    // toDo.map((x, y) =>
    //   setToDoKey((prev) => {
    //     let temp = [...prev];
    //     temp[y] = x.key;
    //     return temp;
    //   })
    // );
    props.setScheduler((prev) => {
      let temp = prev;
      if (props.toDo.length > 0) {
        temp[0]["day" + new Date().getDate()].toDo.toDoText = props.toDo;
        temp[0]["day" + new Date().getDate()].toDo.toDoComplete =
          props.toDoCompleteArr;
      }
      // console.log(temp);
      return prev;
    });
    // console.log(toDo);
  }, [props.toDo, props.toDoCompleteArr]);

  const completeFunc = () => {
    // console.log(className);
    for (let i = 0; i < props.toDo.length; i++) {
      if (complete[i].className == "complete") {
        props.setToDoCompleteArr((prev) => {
          let temp = [...prev];
          temp[i] = true;
          // console.log(temp);
          return temp;
        });
      } else {
        props.setToDoCompleteArr((prev) => {
          let temp = [...prev];
          temp[i] = false;
          // console.log(temp);
          return temp;
        });
      }
    }
  };

  const enterEvent = (e) => {
    setCounter((prev) => prev + 1);
    const toDos = {
      toDo: e.target.value,
      key: counter,
    };
    if (e.key == "Enter") {
      e.preventDefault();
      props.setToDo([...props.toDo, toDos]);
      e.target.value = "";
      setCounter((prev) => prev++);
    }
  };

  return (
    <>
      <StyleToDo>
        <form action="" className="toDoForm">
          <div className="todoBox">
            {props.toDo.map((x, y) => (
              <ToDoList
                y={y}
                toDo={x.toDo}
                key={x.key}
                setToDo={props.setToDo}
                toDoArr={props.toDo}
                num={x.key}
                complete={complete}
                setToDoCompleteArr={props.setToDoCompleteArr}
                toDoCompleteArr={props.toDoCompleteArr}
                setToDoArr={setToDoArr}
                completeFunc={completeFunc}
              />
            ))}
          </div>
          <input
            type="text"
            placeholder="write your todo"
            className="toDoInput"
            maxLength={16}
            onKeyPress={enterEvent}
          />
        </form>
      </StyleToDo>
    </>
  );
}

export default ToDo;
