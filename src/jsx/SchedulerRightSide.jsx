// import styled from "styled-components";
import Style from "../css/StyleSchedulerRightSide";
import Table from "./TableDate";
function RightSide() {
  const arr = [
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "01",
    "02",
    "03",
    "04",
    "05",
  ];
  return (
    <Style className="rightSide">
      <div className="time">
        <p>
          <span>5</span>시간<span>30</span>분
        </p>
      </div>
      <div className="timeTable">
        {arr.map((x, y) => (
          <Table time={x} key={y} y={y} />
        ))}
      </div>
    </Style>
  );
}

export default RightSide;
