import { useState } from "react";
import Header from "./header";
import "../css/calender.css";

function Calender(props) {
  const [nextMonth, setNextMonth] = useState(0);
  const [prevMonth, setPreveMonth] = useState(1);

  const [curruentDate, setCurrentDate] = useState(new Date());
  const nowYears = curruentDate.getFullYear();
  const nowMonth = curruentDate.getMonth();

  const monthStart = new Date(nowYears, nowMonth + nextMonth, 1).getDay();
  const monthEnd = new Date(nowYears, nowMonth + prevMonth, 0);

  const endDay = monthEnd.getDate();
  const endDay2 = monthEnd.getDay();

  const startDate = new Date(nowYears, nowMonth + nextMonth, -monthStart + 1);

  const endDate = new Date(
    nowYears,
    nowMonth + prevMonth,
    42 - endDay - monthStart
  ).getDate();

  const month = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];
  const rows = [[], [], [], [], [], []];
  let counter = 0;
  let counter2 = 0;
  const date = ["SUN", "MON", "THU", "WED", "THRS", "FRI", "SET"];
  const days = [];

  for (let i = -monthStart + 1; i <= endDate + endDay; i++) {
    if (counter2 == 7) {
      counter++;
      counter2 = 0;
    }
    counter2++;
    rows[counter].push(new Date(nowYears, nowMonth + nextMonth, i));
  }

  for (let i = 0; i < 7; i++) {
    days.push(<th key={i}>{date[i]}</th>);
  }
  return (
    <>
      <Header />
      <main>
        <div className="mainHeader">
          <span className="year">{monthEnd.getFullYear()}</span>
          <div>
            <input
              type="button"
              value="<"
              onClick={() => {
                setNextMonth((prev) => prev - 1);
                setPreveMonth((prev) => prev - 1);
              }}
            />
            <span className="month">{monthEnd.getMonth() + 1}</span>
            <input
              type="button"
              value=">"
              onClick={() => {
                setNextMonth((prev) => prev + 1);
                setPreveMonth((prev) => prev + 1);
              }}
            />
          </div>
          <span className="monthEng">{month[monthEnd.getMonth()]}</span>
        </div>
        <table>
          <thead>
            <tr>{days}</tr>
          </thead>
          <tbody>
            {rows.map((i, j) => (
              <tr key={j}>
                {i.map((x, y) => (
                  <td
                    key={y}
                    className={
                      x.getDate() == curruentDate.getDate() && nextMonth == 0
                        ? "today"
                        : x.getDay() == 0
                        ? "sun"
                        : x.getDay() == 6
                        ? "set"
                        : ""
                    }
                  >
                    <span>{x.getDate()}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Calender;
