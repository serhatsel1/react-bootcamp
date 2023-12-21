import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setAllData(data);
      setLoading(false);
    };
    getData();
  }, []);

  console.log(allData);
  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {allData?.map((value, index) => (
        <div
          onClick={() => navigate(`detail/${value?.id}`)}
          style={{ marginBottom: "30px", cursor: "pointer" }}
          key={index}>
          <div>{value?.category}</div>
          <img style={{ width: "100px" }} src={value?.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Home;
