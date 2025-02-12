import Input from "../common/Input";
import Button from "../common/Button";
export default function CardActions({
  cart,
  selectedItems,
  handleSelectAll,
  handleRemoveAll,
}) {
  return (
    <div className="border shadow-2xl w-full p-5 flex justify-between rounded-t-md items-center">
      <div className="flex gap-1">
        <Input
          type="checkbox"
          checked={selectedItems.length === cart.length && cart.length > 0}
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
        disabled={selectedItems.length === 0}
      />
    </div>
  );
}
