import { useState, useEffect } from "react";
function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-between flex-wrap">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="md:w-44 w-36 md:my-2 p-2 flex cursor-pointer flex-col shadow-2xl  duration-300 transition rounded-md justify-between hover:transition hover:-translate-y-3 hover:duration-150  items-start"
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
