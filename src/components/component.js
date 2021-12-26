import React from "react";

const Component1 = (props) => {
  return (
    <div>
      {props.name}
      {props.age * 2}
      <div> {props.prop1}</div>
    </div>
  );
};

export default Component1;
