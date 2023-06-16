import React from "react";

const Child = props => {
  const { getChildValue } = props;

  return (
    <>
      <input type="text" onChange={getChildValue} />{" "}
    </>
  );
};

export default Child;
