import RightSide from "./SchedulerRightSide";
import SubjectData from "./SubjectDate";
import SchedulerLeftSide from "../css/StyleScheduler";
import Header from "./Header";
function Scheduler() {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];
  return (
    <>
      <SchedulerLeftSide>
        <div className="schedulerSection">
          <form className="schedulerForm" action="">
            <div className="leftSideHeader">
              <div className="date">
                <span>날짜:</span>
                <input type="text" />.<input type="text" />.
                <input type="text" />
              </div>
              {/* <hr /> */}
              <textarea className="text" maxLength={21}></textarea>
            </div>
            <div className="studyList">
              <ul>
                {arr.map((x) => (
                  <SubjectData key={x} class={x} />
                ))}
              </ul>
            </div>
          </form>
        </div>
        <RightSide />
      </SchedulerLeftSide>
    </>
  );
}

export default Scheduler;
