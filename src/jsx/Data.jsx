import { useEffect, useState } from "react";

const TimeData = (props) => {
  return (
    <>
      <div
        className={"timeData " + `${"clicked" + props.x}`}
        onMouseDown={(e) => {
          // console.log(props.study);
        }}
      ></div>
      {/* <input
        type="range"
        min={0}
        max={60}
        step={10}
        onChange={(e) => {
          // setStudy((prev) => {
          //   let temp = [...prev];
          //   temp = [e.target.value];
          //   return temp;
          // });
          console.log(e.target.value);
        }}
      /> */}
    </>
  );
};

export default TimeData;
