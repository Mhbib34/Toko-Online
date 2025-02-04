import HamburgerMenu from "../common/HamburgerMenu";
import Form from "../Fragments/Form";
import IndexButton from "../Fragments/IndexButton";

function Navbar() {
  return (
    <div className="bg-[#2b2b2b] w-[80%] flex items-center justify-center m-auto my-2 p-2 rounded-full">
      <div className="flex justify-between w-full items-center">
        <Form />
        <HamburgerMenu />
        <IndexButton />
      </div>
    </div>
  );
}

export default Navbar;
