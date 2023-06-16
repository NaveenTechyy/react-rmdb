import React, { useState, useCallback } from "react";
import List from "./List";

function UseCallback() {
  const [number, SetNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  //   const getItems = useMemo(() => {
  //     return [number, number + 1, number + 2];
  //   }, [number]);

  //useCallback will return the entire function when the dependency changes
  //useMemo will only return the return variable value

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#333" : "#FFF",
  };
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
      <List getItems={getItems} />
    </div>
  );
}

export default UseCallback;
