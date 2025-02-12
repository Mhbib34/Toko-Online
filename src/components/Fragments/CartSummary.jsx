import Button from "../common/Button";

export default function CartSummary({ total, selectedItems }) {
  return (
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
  );
}
