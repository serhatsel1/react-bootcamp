import { useState } from "react";
import Button from "./components/Button";
import Text from "./components/Text";

function App() {
  // let name = "serhat";

  const [name, setName] = useState("react");

  const clickFunc = () => {
    console.log("Click işlemi yapıldı");
  };

  return (
    <>
      <div onClick={clickFunc}>{name}</div>
      <div>{name}</div>
      <div>{name}</div>
      <Text number="1" name={"react"} />
      <Text number="2" />
      <Text number="33" />
      <Button name="Arttır" />
      <Button name="azalt" />
    </>
  );
}

export default App;
