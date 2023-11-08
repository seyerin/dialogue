import { useEffect, useState } from "react";

function DiaryMain(props) {
  const currentDate = "";
  if (localStorage.getItem("currentDate")) {
    currentDate = JSON.parse(localStorage.getItem("currentDate"))[2];
  }
  // console.log(currentDate);
  const nowDate = new Date();
  const diaryLength = props.diary.length;
  const obj = [
    {
      ["day" + new Date().getDate()]: {
        feeling: "",
        weather: "",
        date:
          String(nowDate.getFullYear()) +
          String(nowDate.getMonth() + 1) +
          +String(nowDate.getDate()),
        diaryTitle: "",
        diaryText: "",
      },
    },
  ];
  const savedDiary = () => {
    for (let i = 0; i < diaryLength; i++) {
      if (
        String(Object.keys(props.currentDiary)) ==
        String(Object.keys(props.diary[i]))
      ) {
        props.setDiary((prev) => {
          let temp = [...prev];
          temp[i][Object.keys(props.diary[i])].feeling = props.feelingEmoji;
          temp[i][Object.keys(props.diary[i])].weather = props.weatherEmoji;
          temp[i][Object.keys(props.diary[i])].diaryTitle = props.title;
          temp[i][Object.keys(props.diary[i])].diaryText = props.text;
          return temp;
        });
        break;
      } else {
        if (i == diaryLength - 1) {
          props.setDiary((prev) => {
            let temp = [...prev];
            temp.push(props.currentDiary);
            return temp;
          });
        }
      }
    }
  };

  useEffect(() => {
    props.setCurrentDiary((prev) => {
      let temp = { ...prev };
      temp = {
        ["day" + nowDate.getDate()]: {
          feeling: props.feelingEmoji,
          weather: props.weatherEmoji,
          date: 2023119,
          diaryTitle: props.title,
          diaryText: props.text,
        },
      };
      return temp;
    });
  }, [props.feelingEmoji, props.weatherEmoji, props.title, props.text]);
  return (
    <>
      <div className="diary">
        <p>
          제목:
          <input
            type="text"
            maxLength={60}
            onChange={(e) => {
              props.setTitle(e.target.value);
            }}
            defaultValue={props.diary
              .map((x) =>
                String(Object.keys(x)) ==
                "day" + `${currentDate ? currentDate : nowDate.getDate()}`
                  ? x[Object.keys(x)].diaryTitle
                  : ""
              )
              .join("")}
          />
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          maxLength={1500}
          onChange={(e) => {
            props.setText(e.target.value);
          }}
          defaultValue={props.diary
            .map((x) =>
              String(Object.keys(x)) ==
              "day" + `${currentDate ? currentDate : nowDate.getDate()}`
                ? x[Object.keys(x)].diaryText
                : ""
            )
            .join("")}
        ></textarea>
        <div className="btnBox">
          <button type="submit" className="save" onClick={savedDiary}>
            저장
          </button>
        </div>
      </div>
    </>
  );
}

export default DiaryMain;
