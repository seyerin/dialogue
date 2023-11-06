import ToDo from "./ToDo";
import SchedulerRightSide from "./SchedulerRightSide";
import SchedulerLeftSide from "./SchedulerLeftSide";
import Header from "../Header";
import StyleScheduler from "../../css/scheduler/StyleScheduler";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
function Scheduler() {
  const [scheduler, setScheduler] = useState(
    () =>
      [
        {
          studyPlan: {
            subject: [],
            plan: [],
            complete: [],
            memo: "",
          },
          studyTimeTable: {
            start: [],
            end: [],
            count: 0,
            time: [],
          },
          toDo: {
            toDoText: [],
            toDoComplete: [],
          },
        },
      ] || JSON.parse(localStorage.getItem("scheduler"))
  );
  useEffect(() => {
    // localStorage.setItem("scheduler", JSON.stringify(scheduler));
    if (!JSON.parse(localStorage.getItem("scheduler"))) {
      localStorage.setItem("scheduler", JSON.stringify(scheduler));
    }
  }, [scheduler]);
  const [memo, setMemo] = useState("");

  return (
    <>
      <Header />
      <StyleScheduler>
        <section className="leftSection">
          <ToDo />
        </section>
        <section className="rightSection">
          <SchedulerLeftSide
            setScheduler={setScheduler}
            scheduler={scheduler}
            setMemo={setMemo}
            memo={memo}
          />
          <SchedulerRightSide
            setScheduler={setScheduler}
            scheduler={scheduler}
          />
        </section>
      </StyleScheduler>
    </>
  );
}

export default Scheduler;
