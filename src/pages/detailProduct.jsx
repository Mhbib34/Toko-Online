import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingAnimation from "../components/common/LoadingAnimation";
import Navbar from "../components/layout/Navbar";
import Button from "../components/common/Button";

export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product) {
      setSubtotal((product.price * count).toFixed(2));
    }
  }, [count, product]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingAnimation className="w-full h-full flex justify-center items-center" />
      </div>
    );
  }

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMin() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="md:px-48 px-10">
      <Navbar />
      <div className="mt-10 flex justify-between gap-5 py-10 ">
        <div className="w-[30%] p-2 h-72 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full"
          />
        </div>
        <div className="w-[40%]">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-bold">${product.price}</p>
          <p>Rating: {product.rating.rate} ⭐</p>
        </div>
        <div className="w-[30%] border shadow-2xl px-5 rounded-md h-56">
          <div className="flex flex-col h-full justify-between py-5">
            <div className="flex flex-col justify-between h-full mb-2 gap-2">
              <span className="text-xl font-medium">
                Atur jumlah dan catatan
              </span>
              <div className="flex items-center px-2 w-[50%] border rounded-lg justify-between">
                <button onClick={handleMin} className="text-2xl">
                  -
                </button>
                <span className="text-xl">{count}</span>
                <button onClick={handlePlus} className="text-2xl">
                  +
                </button>
              </div>
              <div className="flex justify-between">
                <span className="font-light">subtotal</span>
                <span className="font-semibold">$ {subtotal}</span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 mx-auto">
              <Button
                text="+Keranjang"
                type="button"
                className="bg-[#9bf272] border-[#9bf272]  hover:border-[#2b2b2b]  text-[#2b2b2b] transition-all duration-200 ease-in"
              />
              <Button
                text="Beli Langsung"
                type="button"
                className="hover:bg-[#9bf272] hover:text-[#2b2b2b] border-[#2b2b2b] bg-[#2b2b2b] text-[#9bf272] transition-all duration-200 ease-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
