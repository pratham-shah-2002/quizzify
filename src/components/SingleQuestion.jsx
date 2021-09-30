import React, { useState } from "react";

export default function SingleQuestion(props) {
  let bgcolor = ["#8AB6D6", "#FCFFA6", "#80ED99", "#fcced6"];
  let color = ["#0061A8", "#FEC260", "#01937C", "#e02e4c"];
  const [data, setdata] = useState("");
  const [pressed, setPressed] = useState(5);
  const [myStyle, setmyStyle] = useState({
    border: "1px solid black",
    // width: "max-content",
    padding: "7px",
  });
  const checkAnswer = () => {
    if (options[pressed] === correct) {
      setdata("Correct!");
      setmyStyle({
        border: "1px solid green",
        // width: "max-content",
        color: "green",
        padding: "7px",
        borderRadius: "0.25rem",
        backgroundColor: "#b0f7c0",
        marginTop: "2vh",
      });
    } else {
      setdata(`Incorrect! The correct answer is ${correct}`);
      setmyStyle({
        border: "1px solid red",
        // width: "max-content",
        color: "red",
        padding: "7px",
        borderRadius: "0.25rem",
        backgroundColor: "#fcdce1",
        marginTop: "2vh",
      });
    }
  };
  let { question, incorrect, correct, start } = props;
  let options = [...incorrect, correct];
  options.sort();

  return (
    <div
      className="load_questions"
      style={
        !start
          ? {
              display: "none",
            }
          : {
              display: "inline",
            }
      }
    >
      <div
        className="question"
        dangerouslySetInnerHTML={{ __html: `Q. ${question}` }}
      />
      <ul>
        {options.map((val, index) => {
          return (
            <>
              <li key={index} className="option">
                {index + 1 + "."}
                <button
                  onClick={() => setPressed(index)}
                  key={index}
                  style={
                    pressed === index
                      ? {
                          backgroundColor: "blue",
                          color: "white",
                        }
                      : {
                          border: `0.25px solid ${color[index]}`,
                          color: `${color[index]}`,
                          backgroundColor: `${bgcolor[index]}`,
                        }
                  }
                  dangerouslySetInnerHTML={{ __html: val }}
                />
              </li>
            </>
          );
        })}
        <button className="submit" onClick={checkAnswer}>
          Submit
        </button>
        {data ? (
          <div className="answer" style={myStyle}>
            {data}
          </div>
        ) : null}
      </ul>
    </div>
  );
}
