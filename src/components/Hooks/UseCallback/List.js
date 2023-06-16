import React, { useState, useEffect } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems);
    console.log("Updating Items");
  }, [getItems]);
  return (
    <div style={{ color: "red" }}>
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default List;
