import { useState } from "react";
import Detail from "../../css/Calender/StylrCalenderDetail";
import { useNavigate, Link } from "react-router-dom";
function CalenderDetail(props) {
  // console.log(props.currentDate.getDate());
  const navigate = useNavigate();
  const toDiary = () => {
    localStorage.setItem(
      "currentDate",
      JSON.stringify([
        props.currentDate.getFullYear(),
        props.currentDate.getMonth(),
        props.currentDate.getDate(),
      ])
    );
    // props.currentDate.getFullYear()
    navigate("/Diary");
  };
  const [diary, setDiary] = useState();
  const [feeling, setFeeling] = useState();

  return (
    <>
      <Detail className={props.remove ? "remove" : "box"}>
        <div className="dateBox">
          <span className="currentDate">
            {props.currentDate ? props.currentDate.getDate() : ""}
          </span>
          <span
            onClick={(e) => {
              props.setRemove(true);
            }}
          >
            x
          </span>
        </div>
        <div className="diaryBox">
          <img
            src={
              localStorage.getItem("diary")
                ? props.diaryArr
                    .map((x) => {
                      if (props.currentNum != 0) {
                        if (
                          String(Object.keys(x)).replace("day", "") ==
                          props.currentNum
                        ) {
                          if (x[Object.keys(x)].feeling == "") {
                            return "img/feeling/empty.png";
                          } else {
                            return x[Object.keys(x)].feeling;
                          }
                        }
                      }
                    })
                    .join("")
                : ""
            }
            alt=""
            className="feeling"
          />
          <p className="diaryTitle" onClick={toDiary}>
            {localStorage.getItem("diary")
              ? props.diaryArr
                  .map((x) => {
                    if (props.currentNum != 0) {
                      if (
                        String(Object.keys(x)).replace("day", "") ==
                        props.currentNum
                      ) {
                        if (x[Object.keys(x)].diaryTitle == "") {
                          return "일기 쓰러 가기 ✏️✏️";
                        } else {
                          return x[Object.keys(x)].diaryTitle;
                        }
                      }
                    }
                  })
                  .join("")
              : ""}
          </p>
        </div>
      </Detail>
    </>
  );
}

export default CalenderDetail;
