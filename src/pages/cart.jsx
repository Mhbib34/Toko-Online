import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Navbar from "../components/layout/Navbar";
import { useState, useEffect } from "react";

export default function CartPages() {
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const calculatedTotal = selectedItems.reduce((sum, id) => {
      const product = cart.find((item) => item.id === id);
      return product ? sum + product.price : sum;
    }, 0);
    setTotal(calculatedTotal.toFixed(2));
  }, [selectedItems, cart]);

  function handleRemoveItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    const isConfirm = confirm("Apakah anda yakin ingin menghapus item?");
    if (isConfirm) {
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  function handleSelectItem(id) {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  }

  function handleSelectAll() {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.map((item) => item.id));
    }
  }

  function handleRemoveAll() {
    if (cart.length === 0) return;
    const isConfirm = confirm("Apakah anda yakin ingin menghapus semua item?");
    if (isConfirm) {
      setCart([]);
      localStorage.setItem("cart", JSON.stringify([]));
    }
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
                <Input
                  type="checkbox"
                  checked={
                    selectedItems.length === cart.length && cart.length > 0
                  }
                  onChange={handleSelectAll}
                />
                <span>Pilih Semua</span>
              </div>
              <Button
                text="Hapus Semua"
                type="button"
                onClick={handleRemoveAll}
                className="hover:bg-[#9bf272] hover:text-[#2b2b2b] border-[#2b2b2b] bg-[#2b2b2b] text-[#9bf272] transition-all duration-200 ease-in"
                disabled={selectedItems.length === 0} // Disable jika tidak ada item yang dipilih
              />
            </div>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="border shadow-2xl w-full p-5 flex justify-between rounded-t-md mt-2 h-40 items-center"
                >
                  <div className="h-full flex items-center gap-5">
                    <Input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                    />
                    <div className="h-full">
                      <img
                        src={item.image}
                        className="h-full"
                        alt={item.title}
                      />
                    </div>
                    <div>
                      <p>{item.title}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <p className="font-bold text-2xl">${item.price}</p>
                    <Button
                      text="Hapus"
                      type="button"
                      onClick={() => handleRemoveItem(item.id)}
                      className="hover:bg-[#9bf272] hover:text-[#2b2b2b] border-[#2b2b2b] bg-[#2b2b2b] text-[#9bf272] transition-all duration-200 ease-in"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-5">
                Keranjang kosong 😔
              </p>
            )}
          </div>
          <div className="w-[30%] py-5">
            <div className="flex border flex-col shadow-2xl p-5 rounded-md gap-3">
              <h1 className="text-lg font-semibold">Ringkasan Belanja</h1>
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-bold text-xl">${total}</span>
              </div>
              <Button
                text="Beli"
                type="submit"
                className="bg-[#9bf272] border-[#9bf272] hover:bg-[#2b2b2b] hover:text-[#9bf272] transition-all duration-200 ease-in"
                disabled={selectedItems.length === 0} // Disable jika tidak ada item yang dipilih
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
