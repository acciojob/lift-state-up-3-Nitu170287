import React from "react";

const Child2 = (props) => {
  return (
    <div className="child2">
      <h2>Child Component 2</h2>
      <button onClick={props.updateSelectOption}>Option 2</button>
    </div>
  );
};
export default Child2;
