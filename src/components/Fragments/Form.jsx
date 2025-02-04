import Input from "../common/Input";

function Form() {
  function handleInputSearch(e) {
    e.preventDefault();
    localStorage.setItem("searchInput", e.target.searchInput.value);
    e.target.searchInput.value = "";
  }
  return (
    <div className="w-full h-full flex px-4 py-1 items-center rounded-md">
      <i className="bx bx-search-alt text-white text-2xl"></i>
      <form className="w-full" onSubmit={handleInputSearch}>
        <Input type="text" name="searchInput" placeholder="Cari barang..." />
      </form>
      <div className="hidden md:flex cursor-pointer">
        <i className="bx bxs-cart text-white text-2xl w-full h-full"></i>
      </div>
    </div>
  );
}
export default Form;
