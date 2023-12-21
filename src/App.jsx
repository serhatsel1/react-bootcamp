import React, { useState, memo, useCallback } from "react";

const Counter = React.memo(({ increment }) => {
  console.log("Render !!!");

  return (
    <>
      <button onClick={increment}>arttır</button>
    </>
  );
});

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  },[count]);

  return (
    <>
      <div>{count}</div>
      <Counter increment={increment} />
    </>
  );
}

export default App;
