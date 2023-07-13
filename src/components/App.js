import React, { useState } from "react";
import "./../styles/App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";

const App = () => {
  let [selectOption, setSelectOption] = useState("");

  function updateSelectOption1() {
    setSelectOption("option 1");
  }

  function updateSelectOption2() {
    setSelectOption("option 2");
  }

  return (
    <div className="parent">
      {/* Do not remove the main div */}
      <h1>Parent Component </h1>
      <Child1 updateSelectOption={updateSelectOption1} />
      <Child2 updateSelectOption={updateSelectOption2} />
      <p>Selected Option: {selectOption}</p>
    </div>
  );
};

export default App;
