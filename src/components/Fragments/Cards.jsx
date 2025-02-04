import { useState, useEffect } from "react";
import Button from "../common/Button";
function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=15"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div className="flex flex-wrap justify-between">
      {data.map((item) => {
        return (
          <div className="h-72 w-64 border-2 my-5 p-2 flex flex-col gap-2">
            <img src={item.image} alt="" className="w-full h-48" />
            <p className="text-sm">
              {item.title.length > 10
                ? item.title.substring(0, 10) + "..."
                : item.title}
            </p>
            <Button
              type="button"
              text="Add to cart"
              className={`bg-[#9bf272]`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
