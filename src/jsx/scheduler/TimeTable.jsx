import Table from "../../css/scheduler/StyleTimeData";
function TimeTable(props) {
  return (
    <Table
      className={"timeData unClick"}
      ref={(ref) => (props.data[props.x] = ref)}
      onMouseDown={(e) => {
        props.setCount((prev) => prev + 1);
        props.setStudyStart((prev) => {
          let temp = prev;
          temp.push(props.x);
          // console.log(temp);
          return temp;
        });
      }}
      onMouseUp={(e) => {
        props.setStudyEnd((prev) => {
          let temp = prev;
          temp.push(props.x);
          // console.log(temp);
          return temp;
        });
        props.timeFunc();
        // props.setFlag(true);
      }}
    ></Table>
  );
}

export default TimeTable;
