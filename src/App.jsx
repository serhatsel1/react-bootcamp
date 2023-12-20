import { useState } from "react";
import Button from "./components/Button";
import Text from "./components/Text";

function App() {
  // let name = "serhat";

  // const [name, setName] =  // const clickFunc = () => {
  //   console.log("Click işlemi yapıldı");
  //   setName("react çok değişti ");
  // };useState("react");

  // const [count, setCount] = useState(0);

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  const [name, setName] = useState([null]);
  const nameFunc = (e) => {
    setName(e.target.value);
  };

  console.log("Name -->", name);

  const [data, setData] = useState([]);

  const dataFunc = () => {
    setData((prev) => [...prev, name]);
  };
  console.log(data);
  return (
    <>
      {/* <div onClick={clickFunc}>{name}</div>
      <div>{name}</div>
      <div>{name}</div> */}
      {/* <Text number="1" name={"react"} />
      <Text number="2" />
      <Text number="33" /> */}
      {/* <Button name="Arttır" /> */}
      {/* <Button name="azalt" /> */}
      {/* <div>{count}</div> */}
      {/* <Button name={"Arttır"} onClick={() => setCount(count + 1)} /> */}
      {/* <button onClick={() => setCount(count + 1)}>arttır</button> */}
      {/* <button onClick={decrement}>azalt</button> */}

      <input
        type="text"
        placeholder="enter name"
        // onChange={(e) => {
        //   setName(e.target.value);
        // }}
        onChange={nameFunc}
      />
      <button onClick={dataFunc}>tıkla</button>
      <div>
        {data.map((value, i) => (
          <div key={i}>{value}</div>
        ))}
      </div>
    </>
  );
}

export default App;
