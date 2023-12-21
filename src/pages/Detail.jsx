import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    const getSingleData = async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setSingleData(data);
    };
    getSingleData();
  }, [id]);
  console.log("SingleData -->", singleData);
  return (
    <>
      <div style={{ marginBottom: "30px", cursor: "pointer" }}>
        <div>{singleData?.category}</div>
        <img style={{ width: "100px" }} src={singleData?.image} alt="" />
      </div>
    </>
  );
};

export default Detail;
