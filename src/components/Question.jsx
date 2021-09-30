import React from "react";
import QuestionsCategory from "./QuestionsCategory";
export default function Question(props) {
  let { category, difficulty } = props;
  return (
    <>
      <div className="category_div">
        <QuestionsCategory
          key={category + difficulty}
          category={category}
          difficulty={difficulty}
        />
      </div>
    </>
  );
}
