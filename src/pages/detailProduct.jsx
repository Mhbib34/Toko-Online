import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingAnimation from "../components/common/LoadingAnimation";
import Navbar from "../components/layout/Navbar";
import Button from "../components/common/Button";
import Cards from "../components/Fragments/Cards";

export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

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
    if (product?.price) {
      setSubtotal((product.price * count).toFixed(2));
    }
  }, [count, product]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingAnimation className="w-full h-full flex justify-center items-center" />
      </div>
    );
  }

  function handlePlus() {
    setCount((prev) => prev + 1);
  }

  function handleMin() {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  }

  function handleCart() {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, count: item.count + count } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, count }]);
    }

    alert("Item berhasil ditambahkan");
  }

  return (
    <div className="md:px-48 px-10">
      <Navbar />
      <div className="mt-10 flex justify-between gap-5 py-10">
        <div className="w-[30%] p-2 h-72">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-[40%] flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <span className="font-medium">
            Terjual {product.rating.count} ⭐{product.rating.rate}
          </span>
          <p className="text-3xl font-bold">${product.price}</p>
          <p className="text-gray-700">
            {product.description.substring(0, 300) + "..."}
          </p>
        </div>
        <div className="w-[30%] border shadow-2xl px-5 rounded-md h-56">
          <div className="flex flex-col h-full justify-between py-5">
            <div className="flex flex-col justify-between h-full mb-2 gap-2">
              <span className="text-xl font-medium">
                Atur jumlah dan catatan
              </span>
              <div className="flex items-center px-2 w-[50%] border rounded-lg justify-between">
                <button onClick={handleMin} className="mb-1 text-2xl">
                  -
                </button>
                <span className="text-xl">{count}</span>
                <button onClick={handlePlus} className="mb-1 text-2xl">
                  +
                </button>
              </div>
              <div className="flex justify-between">
                <span className="font-light">Subtotal</span>
                <span className="font-semibold">$ {subtotal}</span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 mx-auto">
              <Button
                onClick={handleCart}
                text="+Keranjang"
                type="button"
                className="bg-[#9bf272] border-[#9bf272] hover:opacity-85 text-[#2b2b2b] transition-all duration-200 ease-in"
              />
              <Button
                text="Beli Langsung"
                type="button"
                className="border-[#2b2b2b] bg-[#2b2b2b] text-[#9bf272]"
              />
            </div>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
}
