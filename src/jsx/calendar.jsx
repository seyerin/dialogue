import { useState } from "react";

import Header from "./header";
function Calendar(props) {
  const [curruentDate, setCurrentDate] = useState(new Date());
  const nowYears = curruentDate.getFullYear();
  const nowMonth = curruentDate.getMonth() + 2;

  const monthStart = new Date(
    curruentDate.getFullYear(),
    curruentDate.getMonth() + 1,
    1
  ).getDay();

  console.log(monthStart);

  const monthEnd = new Date(
    curruentDate.getFullYear(),
    curruentDate.getMonth() + 2,
    0
  );

  const endDay = monthEnd.getDate();
  const endDay2 = monthEnd.getDay();

  const startDate = new Date(
    curruentDate.getFullYear(),
    curruentDate.getMonth() + 1,
    -monthStart + 1
  );
  // console.log(monthStart);

  const endDate = new Date(
    curruentDate.getFullYear(),
    curruentDate.getMonth() + 2,
    6 - endDay2
  ).getDate();

  const rows = [[], [], [], [], []];
  let day = [];
  let counter = 0;
  let counter2 = 0;
  // console.log(endDate);

  const date = ["SUN", "MON", "THU", "WED", "THRS", "FRI", "SET"];
  const days = [];
  for (let i = -monthStart + 1; i <= endDay + endDate; i++) {
    day.push(
      new Date(curruentDate.getFullYear(), curruentDate.getMonth(), i).getDate()
    );
  }
  console.log(day);

  // for (let i = 0; i < day.length; i++) {
  //   if (counter2 == 7) {
  //     counter++;
  //     counter2 = 0;
  //   }
  //   counter2++;
  //   rows[counter].push(day[i]);
  // }

  // console.log(rows);
  for (let i = 0; i < 7; i++) {
    days.push(<th key={i}>{date[i]}</th>);
  }
  return (
    <>
      <Header />
      <main>
        <div className="mainHeader">
          <span className="year">{nowYears}</span>
          <br />
          <span className="month">{nowMonth}</span>
        </div>
        <table>
          <thead>
            <tr>{days}</tr>
          </thead>
          <tbody>
            {rows.map((i, j) => (
              <tr key={j}>
                {i.map((x, y) => (
                  <td key={y}>{x}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Calendar;
