import Button from "../common/Button";
import Input from "../common/Input";

function Navbar() {
  return (
    <div className="bg-[#2b2b2b] w-[80%] flex items-center justify-center m-auto my-2 p-2 rounded-full">
      <div className="flex justify-between w-full items-center">
        <div className="w-full h-full flex px-2 mx-4 py-1 items-center rounded-md  ">
          <i className="bx bx-search-alt text-white text-2xl" undefined></i>
          <Input type="text" name="searchInput" placeholder="Cari di sini..." />
          <i class="bx bxs-cart text-white text-2xl" undefined></i>
        </div>
        <div className="flex gap-2 justify-center items-center border-l-2 border-white px-4 ">
          <Button
            type="submit"
            className={
              " text-[#9bf272] hover:bg-[#9bf272] hover:text-black transition-all duration-200 ease-in"
            }
            text={"Masuk"}
          />
          <Button
            type="submit"
            className={
              "bg-[#9bf272] text-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-[#9bf272] transition-all duration-200 ease-in"
            }
            text={"Daftar"}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
