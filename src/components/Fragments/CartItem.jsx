import Input from "../common/Input";
import Button from "../common/Button";

export default function CardItem({
  item,
  selectedItems,
  handleSelectItem,
  handleRemoveItem,
}) {
  return (
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
            <img src={item.image} className="h-full w-full" alt={item.title} />
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
  );
}
