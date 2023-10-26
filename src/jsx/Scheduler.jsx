import RightSide from "./SchedulerRightSide";
function Scheduler() {
  return (
    <>
      <main>
        <section className="leftSide">
          <form action="">
            <div className="date">
              <p>
                날짜: <input type="text" />.<input type="text" />.
                <input type="text" />
              </p>
            </div>
            <hr />
            <textarea className="text"></textarea>
            <div className="studyList">
              <ul>
                <li>
                  <input type="text" className="subject"></input>
                  <input type="text" />
                </li>
              </ul>
            </div>
          </form>
        </section>
        <RightSide />
      </main>
    </>
  );
}

export default Scheduler;
