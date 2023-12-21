import { useState, useEffect } from "react";
import Button from "./components/Button";
import Text from "./components/Text";

function App() {
  const [name, setName] = useState("react");

  useEffect(() => {
   setTimeout(() => {
    setName("react güncellendi...")
   }, 4000);
  });
  return <>{name}</>;
}

export default App;
