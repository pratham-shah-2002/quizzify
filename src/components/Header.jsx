import React from "react";

export default function Header(props) {
  let { setcategory, setdifficulty } = props;
  const fun = (val) => {
    setcategory(val);
  };
  const fun_d = (val) => {
    setdifficulty(val);
  };
  return (
    <div className="header_div">
      <div className="title">
        <h2>Quizzify</h2>
      </div>
      <div className="quiz_props">
        <div className="category">
          Select category
          <div className="categories">
            <button value="9" onClick={(e) => fun(e.target.value)}>
              General Knowledge
            </button>
            <button value="10" onClick={(e) => fun(e.target.value)}>
              Entertainment: Books
            </button>
            <button value="11" onClick={(e) => fun(e.target.value)}>
              Entertainment: Film
            </button>
            <button value="12" onClick={(e) => fun(e.target.value)}>
              Entertainment: Music
            </button>
            <button value="13" onClick={(e) => fun(e.target.value)}>
              Entertainment: Musicals & Theatres
            </button>
            <button value="14" onClick={(e) => fun(e.target.value)}>
              Entertainment: Television
            </button>
            <button value="15" onClick={(e) => fun(e.target.value)}>
              Entertainment: Video Games
            </button>
            <button value="16" onClick={(e) => fun(e.target.value)}>
              Entertainment: Board Games
            </button>
            <button value="17" onClick={(e) => fun(e.target.value)}>
              Science and Nature
            </button>
            <button value="18" onClick={(e) => fun(e.target.value)}>
              Science: Computers
            </button>
            <button value="19" onClick={(e) => fun(e.target.value)}>
              Science: Mathematics
            </button>
            <button value="20" onClick={(e) => fun(e.target.value)}>
              Mythology
            </button>
            <button value="21" onClick={(e) => fun(e.target.value)}>
              Sports
            </button>
            <button value="22" onClick={(e) => fun(e.target.value)}>
              Geography
            </button>
            <button value="23" onClick={(e) => fun(e.target.value)}>
              History
            </button>
          </div>
        </div>
        <div className="difficulty">
          Set difficulty
          <div className="difficulties">
            <button value="easy" onClick={(e) => fun_d(e.target.value)}>
              Easy
            </button>
            <button value="medium" onClick={(e) => fun_d(e.target.value)}>
              Medium
            </button>
            <button value="hard" onClick={(e) => fun_d(e.target.value)}>
              Hard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
