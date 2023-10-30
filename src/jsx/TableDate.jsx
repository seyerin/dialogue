import { useEffect, useState } from "react";
import "../css/StyleTable";
import TableLine from "../css/StyleTable";

function Table(props) {
  const TimeData = (props) => {
    const [time, setTime] = useState(false);
    const [study, setStudy] = useState(
      () => JSON.parse(localStorage.getItem("arr")) || []
    );
    useEffect(() => {
      // if (study == []) {
      //   localStorage.setItem("arr", JSON.stringify([study]));
      // } else {
      localStorage.setItem("arr", JSON.stringify([...study]));
      // }
    }, [study]);

    return (
      <>
        <div
          className={"timeData"}
          onClick={(e) => {
            setTime((prev) => !prev);

            console.log(study);
            setStudy((prev) => {
              let temp = [...prev];
              temp.push([props.y, props.x]); // [0, 1, 12,[]]] <= push 맞음
              return temp;
            });
            // for (let j = 0; j < 1; j++) { <-- y
            //   for (let i = 1; i < 7; i++) { <-- x
            //     // console.log(
            //     e.target.parentNode.parentNode.children[j].children[i].className =
            //       "timeData click";
            //     // );
            //   }
            // }
            // console.log(JSON.parse(localStorage.getItem("arr")));
          }}
        ></div>
      </>
    );
  };
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <TableLine>
      <span>{props.time}</span>
      {arr.map((x) => (
        <TimeData key={x} y={props.y} x={x} />
      ))}
    </TableLine>
  );
}

export default Table;
