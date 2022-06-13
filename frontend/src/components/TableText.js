import React from "react";

function TableText(props) {
  const text = props.arr.join(", ");
  return (
    <>
      {props.arr.length > 0 ? (
        <div style={{ color: "red" }}>{text}</div>
      ) : (
        <p style={{ color: "orange" }}>No Location Assigned</p>
      )}
    </>
  );
}

export default TableText;
