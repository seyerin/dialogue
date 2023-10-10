import { useState } from "react";

import Header from "./header";
function Calendar(props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const nowDay = currentDate.getDay();
  const nowDate = currentDate.getDate();
  const [nowMonth, setNowMonth] = useState(currentDate.getMonth());
  const nowYears = currentDate.getFullYear();

  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const lastDate = new Date(nowYears, nowMonth + 1, 0).getDate();

  const days = [[], [], [], [], [], [], []];
  let counter = 0;
  let counter2 = 1;
  for (let i = 1; i <= lastDate; i++) {
    days[counter2].push(i);
    counter++;
    if (counter == 7) {
      counter2++;
      counter = 0;
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="mainHeader">
          <span className="year">{nowYears}</span>
          <span className="month">{nowMonth + 1}</span>
        </div>
        <table>
          <thead>
            <tr>
              {week.map((day, i) => (
                <th key={i}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {days.map((i, j) => (
              <tr key={j}>
                {i.map((a, b) => (
                  <td key={b}>{a}</td>
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
