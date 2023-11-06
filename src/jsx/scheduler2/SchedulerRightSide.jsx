import { useEffect, useState, useRef } from "react";
import Style from "../../css/scheduler/StyleSchedulerRightSide";
import Time from "./TimeTitle";
import Table from "./StudyTime";

function RightSide(props) {
  const data = useRef([]);

  let arr = [];
  for (let i = 0; i < 144; i++) {
    arr.push(i);
  }

  const timeArr = [
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

  let start;
  let end;
  let countArr;
  let counter2 = 0;

  // const painting = () => {
  // if (props.flag) {
  // start = JSON.parse(localStorage.getItem("studyStart"));
  // end = JSON.parse(localStorage.getItem("studyEnd"));
  // countArr = Number(localStorage.getItem("count"));

  //   for (let j = 0; j < countArr; j++) {
  //     for (let i = start[j]; i <= end[j]; i++) {
  //       data[i].className = "timeData click";
  //     }
  //   }
  //   timeFunc();
  // };

  // const timeFunc = () => {
  //   for (let i = 0; i < 144; i++) {
  //     if (data[i].className == "timeData click") {
  //       counter2++;
  //     }
  //   }

  // const hour = Math.floor((counter2 * 10) / 60);
  // const minute = (counter2 * 10) % 60;

  //   props.setTime((prev) => {
  //     let temp = [hour, minute];
  //     return temp;
  //   });
  // };

  let counter = 0;
  return (
    <Style className="rightSide">
      <div className="time">
        <p>
          <span>{}</span>시간<span>{}</span>분
        </p>
      </div>
      <div className="table">
        <div className="timeTitle">
          {timeArr.map((x, y) => (
            <Time key={y} time={x} />
          ))}
        </div>
        <div className="timeTable">
          {arr.map((x) => (
            <Table
              time={x % 7 == 0 || x == 0 ? timeArr[counter++] : ""}
              key={x}
              x={x}
              data={data}
            />
          ))}
        </div>
      </div>
    </Style>
  );
}

export default RightSide;
