import Button from "../common/Button";
import Input from "../common/Input";

function Navbar() {
  function handleInputSearch(e) {
    e.preventDefault();
    localStorage.setItem("searchInput", e.target.searchInput.value);
    e.target.searchInput.value = "";
  }
  return (
    <div className="bg-[#2b2b2b] w-[80%] flex items-center justify-center m-auto my-2 p-2 rounded-full">
      <div className="flex justify-between w-full items-center">
        <div className="w-full h-full flex px-2 mx-4 py-1 items-center rounded-md  ">
          <i className="bx bx-search-alt text-white text-2xl" undefined></i>
          <form className="w-full" onSubmit={handleInputSearch}>
            <Input
              type="text"
              name="searchInput"
              placeholder="Cari barang..."
            />
          </form>
          <div className="hidden md:flex">
            <i
              class="bx bxs-cart text-white text-2xl w-full h-full"
              undefined
            ></i>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <i className="bx bx-menu text-white text-2xl px-4"></i>
        </div>
        <div className="hidden md:flex gap-2 justify-center items-center md:border-l-2 md:border-white px-4  ">
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
