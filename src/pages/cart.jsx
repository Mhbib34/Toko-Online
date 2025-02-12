import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Navbar from "../components/layout/Navbar";
import { useState, useEffect } from "react";

export default function CartPages() {
  const [cart, setCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    let calculatedTotal = 0;
    let calculatedCount = 0;

    selectedItems.forEach((id) => {
      const product = cart.find((item) => item.id === id);
      if (product) {
        calculatedTotal += product.price * product.count;
        calculatedCount += product.count;
      }
    });

    setTotal(calculatedTotal.toFixed(2));
    setTotalCount(calculatedCount);
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
        <div className="flex md:flex-row flex-col justify-between gap-2">
          <div className="md:w-[70%] w-full py-5">
            <div className="border shadow-2xl w-full p-5 flex justify-between rounded-t-md items-center">
              <div className="flex gap-1">
                <Input
                  type="checkbox"
                  checked={
                    selectedItems.length === cart.length && cart.length > 0
                  }
                  onChange={handleSelectAll}
                  className="accent-[#9bf272]"
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
                  className="border shadow-2xl w-full p-5 flex flex-col md:flex-row justify-between gap-3  last:rounded-b-md mt-2 md:h-40 items-center"
                >
                  <div className="h-full flex items-center gap-5">
                    <Input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                      className="accent-[#9bf272]"
                    />
                    <div className="flex md:flex-row flex-col h-full w-full items-center gap-2">
                      <div className="md:h-full h-48 md:w-28 w-48 ">
                        <img
                          src={item.image}
                          className="h-full w-full"
                          alt={item.title}
                        />
                      </div>
                      <div className="">
                        <p>{item.title}</p>
                        <p className="font-light">⭐{item.rating.rate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col justify-between gap-2 w-full md:w-auto items-center">
                    <div className="flex flex-col items-start md:items-center">
                      <p className="font-bold  text-2xl">
                        ${(item.price * item.count).toFixed(2)}
                      </p>
                      <span className="text-sm">({item.count} item)</span>
                    </div>
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
              <div className="text-center text-gray-500 mt-5 flex flex-col gap-4">
                <p>Keranjang masih kosong 😔</p>
                <Link to="/">
                  <Button
                    text="Kembali belanja"
                    type="button"
                    className="hover:bg-[#9bf272] hover:text-[#2b2b2b] border-[#2b2b2b] bg-[#2b2b2b] text-[#9bf272] transition-all duration-200 ease-in"
                  />
                </Link>
              </div>
            )}
          </div>
          <div className="md:w-[30%] w-full py-5">
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
