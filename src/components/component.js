import React from "react";

const Component1 = (props) => {
  // if (false) {
  //   return <div>container div1</div>;
  // } else {
  //   return <div>container div2</div>;
  // }
  return false ? <div>container div1</div> : <div>container div2</div>;
};

export default Component1;
