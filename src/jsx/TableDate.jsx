import { useEffect, useState } from "react";
import "../css/StyleTable";
import TableLine from "../css/StyleTable";
import TimeData from "./Data";

function Table(props) {
  const arr2 = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  const [study, setStudy] = useState(
    `${
      JSON.parse(localStorage.getItem("change"))
        ? JSON.parse(localStorage.getItem("change"))
        : arr2
    }`
  );
  // console.log(JSON.parse(localStorage.getItem("change")));
  useEffect(() => {
    localStorage.setItem("change", JSON.stringify(study));
  }, [study]);
  // console.log(study);
  const arr = [10, 20, 30, 40, 50, 60];
  return (
    <TableLine>
      <span>{props.time}</span>
      {arr.map((x) => (
        <TimeData key={x} y={props.y} x={x} setStudy={setStudy} study={study} />
      ))}
      {/* {arr2.map((x, y) => ( */}
      <input
        type="range"
        min={0}
        max={60}
        step={10}
        onChange={(e) => {
          setStudy(JSON.parse(localStorage.getItem("change")));
          setStudy((prev) => {
            let temp = [...prev];
            temp[props.y] = [e.target.value];
            // console.log(temp);
            console.log("clicked" + e.target.value);
            return temp;
          });
          // console.log(study);
        }}
      />
      {/* ))} */}
    </TableLine>
  );
}

export default Table;
