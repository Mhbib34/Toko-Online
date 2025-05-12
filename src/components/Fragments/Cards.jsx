import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../common/LoadingAnimation";

function Cards() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=18"
        );
        if (!response) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LoadingAnimation className="mt-20 w-[50%] h-[50%] flex justify-center items-center" />
      </div>
    );
  }

  function handleDetail(id) {
    navigate(`/card/detail/${id}`);
  }

  return (
    <div className="flex justify-between flex-wrap gap-2">
      {data.map((item) => {
        return (
          <div
            onClick={() => handleDetail(item.id)}
            key={item.id}
            className="md:w-44 w-36 md:my-2 p-2 border-2 border-slate-900 flex cursor-pointer flex-col shadow-2xl duration-300 transition rounded-md justify-between hover:transition hover:scale-110 hover:duration-150  items-start"
          >
            <div className="w-full md:h-40 h-32">
              <img src={item.image} alt="" className="w-full h-full " />
            </div>
            <p className="text-sm font-medium ">
              {item.title.length > 10
                ? item.title.substring(0, 30) + "..."
                : item.title}
            </p>
            <span className="font-bold text-[#9bf272] md:text-2xl text-lg">
              $ {item.price}
            </span>
            <span className="text-sm text-gray-600 opacity-70">
              {item.rating.count}
            </span>
            <span className="text-md text-gray-400">⭐ {item.rating.rate}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
