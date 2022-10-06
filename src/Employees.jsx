import React from "react";

function Employees(props) {
  return (
    <div>
      <h2>Employee {props.name}</h2>
      <h4>{props.role ? props.role : "No Assigned Role"}</h4>
    </div>
  );
}

export default Employees;
