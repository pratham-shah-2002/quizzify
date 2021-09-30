import React, { useState, useEffect } from "react";
import SingleQuestion from "./SingleQuestion";

const QuestionsCategory = (props) => {
  let { category, difficulty } = props;
  const [data, setData] = useState([]);
  const [start, setstart] = useState(false);
  const fetchData = async () => {
    let url = `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple&difficulty=${difficulty}`;
    let result = await fetch(url);
    let parsedResults = await result.json();
    setData(parsedResults.results);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="result_div">
      <button
        className="next"
        onClick={fetchData}
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
        Next
      </button>
      <button
        className="start-btn"
        onClick={() => setstart(true)}
        style={
          !start
            ? {
                display: "block",
                width: "150px",
                alignSelf: "center",
              }
            : {
                display: "none",
                width: "150px",
                alignSelf: "center",
              }
        }
      >
        Start Quiz
      </button>
      {data.map((val) => {
        return (
          <SingleQuestion
            question={val.question}
            incorrect={val.incorrect_answers}
            correct={val.correct_answer}
            key={val.question}
            start={start}
          />
        );
      })}
    </div>
  );
};
export default QuestionsCategory;
