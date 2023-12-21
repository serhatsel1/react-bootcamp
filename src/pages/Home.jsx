import { useNavigate } from "react-router-dom";

export const data = [
  {
    id: 0,
    name: "React",
    description: "React description",
  },
  {
    id: 1,
    name: "javascript",
    description: "javascript description",
  },
  {
    id: 2,
    name: "python",
    description: "python description",
  },
];
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        {data.map((value, index) => (
          <div
            onClick={() => navigate(`/detail/${value.id}`)}
            style={{ cursor: "pointer", marginBottom: "30px" }}
            key={index}
          >
            {/* <div>{value.id}</div> */}
            <div>{value.name}</div>
            <div>{value.description}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
