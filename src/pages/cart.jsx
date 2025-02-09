import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Navbar from "../components/layout/Navbar";

export default function CartPages() {
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
                text="Hapus"
                type="button"
                className="hover:bg-[#9bf272] hover:text-[#2b2b2b] border-[#2b2b2b] bg-[#2b2b2b] text-[#9bf272] transition-all duration-200 ease-in"
              />
            </div>
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
