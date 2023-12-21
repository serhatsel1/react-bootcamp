import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { data } from "./Home";

const Detail = () => {
  const [getData, setGetData] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  console.log("locationPathname", location.pathname);

  useEffect(() => {
    if (id) {
      setGetData(data.find((value) => value.id == id));
    }
  }, [id]);

  console.log(getData);

  return (
    <>
      <div>{getData?.name}</div>
      <div>{getData?.description}</div>
    </>
  );
};

export default Detail;
