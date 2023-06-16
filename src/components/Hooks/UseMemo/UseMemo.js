import React, { useState, useMemo, useEffect } from "react";

function UseMemo() {
  const [number, SetNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  //useCallback will return the entire function when the dependency changes
  //useMemo will only return the return variable value
  //Additionally if you use useMemo it'll memoise the prev value to some memory so use it when req
  //Whenever we update the theme it actually calls the slow function which is not correct

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#FFF",
      color: dark ? "#333" : "#FFF",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [theme]);

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => SetNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme
      </button>
      <div style={{ color: "red" }}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  for (var i = 0; i < 100000; i++) {
    return num * 2;
  }
}

export default UseMemo;
