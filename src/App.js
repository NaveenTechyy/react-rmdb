import React from "react";
// import Parent from "./components/Props/Parent";
import UseCallback from "./components/Hooks/UseCallback/UseCallback";
import UseMemo from "./components/Hooks/UseMemo/UseMemo";

const App = () => {
  return (
    <div className="App">
      {/* <Parent /> */}
      <UseCallback />
      <UseMemo />
    </div>
  );
};

export default App;
