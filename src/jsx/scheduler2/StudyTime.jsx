import { useEffect, useRef } from "react";
import Atest from "../../css/scheduler/StyleTimeData";
function TimeTable(props) {
  return (
    <TimeTable
      ref={(ref) => (props.data[props.x] = ref)}
      className={"timeData unClick"}
      // onMouseDown={(e) => {
      //   props.setCount((prev) => prev + 1);
      //   props.setStart((prev) => {
      //     let temp = [...prev];
      //     temp.push(props.x);
      //     return temp;
      //   });
      // }}
      // onMouseUp={(e) => {
      // props.setEnd((prev) => {
      // let temp = [...prev];
      // temp.push(props.x);
      // return temp;
      // });
      // props.setFlag(true);
      // ;
      // props.timeFunc();
      // }}
    ></TimeTable>
  );
}
export default TimeTable;
