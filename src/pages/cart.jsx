import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Navbar from "../components/layout/Navbar";
import { useState, useEffect } from "react";

export default function CartPages() {
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, []);

  function handleDelete(id) {
    const filteredItem = cart.filter((item) => item.id !== id);
    setCart(filteredItem);
    localStorage.setItem("cart", JSON.stringify(filteredItem));
  }

  return (
    <div className="md:px-48 px-10 h-screen">
      <Navbar />
      <div className="w-full my-10">
        <h1 className="md:text-2xl font-semibold">Keranjang</h1>
        <div className="flex justify-between gap-2">
          <div className="w-[70%] py-5">
            <div className="border shadow-2xl w-full p-5 flex justify-between rounded-t-md items-center">
              <div className="flex gap-1">
                <Input type="checkbox" name="checkbox" />
                <span>Pilih Semua</span>
              </div>
              <Button
                text="Hapus Semua"
                type="button"
                className="hover:bg-[#9bf272] hover:text-[#2b2b2b] border-[#2b2b2b] bg-[#2b2b2b] text-[#9bf272] transition-all duration-200 ease-in"
              />
            </div>
            {cart.map((item) => {
              return (
                <div
                  key={item.id}
                  className="border shadow-2xl w-full p-5 flex justify-between rounded-t-md  mt-2 h-40 items-center"
                >
                  <div className="h-full flex items-center gap-5">
                    <Input type="checkbox" className="bg-red-500" />
                    <div className="h-full">
                      <img src={item.image} className="h-full w-28" alt="" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm font-light">⭐{item.rating.rate}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <p className="font-bold text-xl">${item.price}</p>
                    <Button
                      onClick={() => handleDelete(item.id)}
                      text="Hapus"
                      type="button"
                      className="hover:bg-[#9bf272] hover:text-[#2b2b2b] border-[#2b2b2b] bg-[#2b2b2b] text-[#9bf272] transition-all duration-200 ease-in"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[30%] py-5">
            <div className="flex border flex-col shadow-2xl p-5 rounded-md gap-3">
              <h1>Ringkasan Belanja</h1>
              <span>Total</span>
              <Button
                text="Beli"
                type="submit"
                className="bg-[#9bf272] border-[#9bf272] hover:bg-[#2b2b2b] hover:text-[#9bf272] transition-all duration-200 ease-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
