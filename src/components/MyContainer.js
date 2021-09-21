import React from "react";

const MyContanier = (props) => {
  return (
    <div style={{ border: "5px solid pink" }}>
      <h1>hello</h1>
      {props.children}
    </div>
  );
};
export default MyContanier;
