import { useState } from "react";
import Header from "./header";
import Main from "../css/StyleCalenderMain";
import CalenderHeader from "./CalenderHeader";

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

  function getClassName(x) {
    if (x.getDate() == curruentDate.getDate() && nextMonth == 0) {
      return "today";
    } else if (x.getDay() == 0) {
      return "sun";
    } else if (x.getDay() == 6) {
      return "set";
    } else {
      return "";
    }
  }

  return (
    <>
      <Header />
      <Main>
        <CalenderHeader
          setNextMonth={setNextMonth}
          setPreveMonth={setPreveMonth}
          monthEnd={monthEnd}
        />
        <table>
          <thead>
            <tr>{days}</tr>
          </thead>
          <tbody>
            {rows.map((i, j) => (
              <tr key={j}>
                {i.map((x, y) => (
                  <td key={y} className={getClassName(x)}>
                    <span>{x.getDate()}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Main>
    </>
  );
}

export default Calender;
