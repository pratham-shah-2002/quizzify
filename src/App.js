import React, { useState } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
const App = () => {
  const [category, setcategory] = useState("");
  const [difficulty, setdifficulty] = useState("medium");
  return (
    <>
      <Header setcategory={setcategory} setdifficulty={setdifficulty} />
      <Question
        category={category}
        setcategory={setcategory}
        difficulty={difficulty}
        setdifficulty={setdifficulty}
      />
    </>
  );
};
export default App;
