import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [childValue, setChildValue] = useState("Type something here");

  const getChildValue = e => {
    setChildValue(e.target.value);
  };

  return (
    <>
      <p>{childValue}</p>
      <Child getChildValue={getChildValue} />
    </>
  );
};

export default Parent;
