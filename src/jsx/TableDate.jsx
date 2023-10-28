import { useState } from "react";
import "../css/StyleTable";
import TableLine from "../css/StyleTable";
function Table(props) {
  const TimeData = (props) => {
    return (
      <div
        className={"timeData " + `${"clicked" + props.y}` + `${props.x}`}
      ></div>
    );
  };

  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <TableLine>
      <span>{props.time}</span>
      {arr.map((x) => (
        <TimeData key={x} y={props.y} x={x} />
      ))}
      {/* <input
        type="range"
        min={0}
        max={60}
        step={10}
        onChange={(e) => {
          console.log(e.target.value);
        }}
      /> */}
    </TableLine>
  );
}

export default Table;
