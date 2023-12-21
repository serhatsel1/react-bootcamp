import { useRef } from "react";

function App() {
  // const countRef = useRef(0);
  const focusRef = useRef();

  const focusFunc = () => {
    focusRef.current.focus();
  };

  // const clickFunc = () => {
  //   countRef.current++;
  //   console.log(countRef.current);
  // };

  // return <button onClick={clickFunc}>react useRef</button>;
  return (
    <>
      <input type="text" ref={focusRef} />
      <button onClick={focusFunc}>focus</button>
    </>
  );
}

export default App;
