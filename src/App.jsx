import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [textchange, setTextChange] = useState("");

  const countFunc = () => {
    setCount(count + 1);
  };

  const largeDataFunc = useMemo(() => {
    [...new Array(100000)].forEach((item) => {});

    return count * 3;
  });

  

  return (
    <>
      <div>{count}</div>
      <button onClick={countFunc}>arttır</button>
      {largeDataFunc}
      <input type="text" onChange={(e) => setTextChange(e.target.value)} />
    </>
  );
}

export default App;
