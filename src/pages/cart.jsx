import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Navbar from "../components/layout/Navbar";
import { useState, useEffect } from "react";
import CardItem from "../components/Fragments/CartItem";
import CardActions from "../components/Fragments/CartActions";
import CartSummary from "../components/Fragments/CartSummary";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Hapus item",
      text: "Anda yakin ingin menghapus item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9bf272",
      cancelButtonColor: "#2b2b2b",
      confirmButtonText: "Hapus item",
      cancelButtonText: "Batalkan",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil",
          text: "I  tem berhasil dihapus",
          icon: "success",
          confirmButtonColor: "#9bf272",
          confirmButtonText: "Berhasil",
        });
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    });
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
    Swal.fire({
      title: "Hapus semua item",
      text: "Anda yakin ingin menghapus semua item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9bf272",
      cancelButtonColor: "#2b2b2b",
      confirmButtonText: "Hapus semua",
      cancelButtonText: "Batalkan",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Berhasil",
          text: "Semua item berhasil dihapus",
          icon: "success",
          confirmButtonColor: "#9bf272",
          confirmButtonText: "Berhasil",
        });
        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
      }
    });
  }

  return (
    <div className="md:px-48 px-10 ">
      <Navbar />
      <div className="w-full my-10">
        <h1 className="md:text-2xl font-semibold">Keranjang</h1>
        <div className="flex md:flex-row flex-col justify-between gap-2">
          <div className="md:w-[70%] w-full py-5">
            <CardActions
              cart={cart}
              selectedItems={selectedItems}
              handleSelectAll={handleSelectAll}
              handleRemoveAll={handleRemoveAll}
            />
            {cart.length > 0 ? (
              cart.map((item) => (
                <CardItem
                  key={item.id}
                  item={item}
                  selectedItems={selectedItems}
                  handleSelectItem={handleSelectItem}
                  handleRemoveItem={handleRemoveItem}
                />
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
          <CartSummary total={total} selectedItems={selectedItems} />
        </div>
      </div>
    </div>
  );
}
