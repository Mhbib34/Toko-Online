import HamburgerMenu from "../common/HamburgerMenu";
import Form from "../Fragments/Form";
import IndexButton from "../Fragments/IndexButton";

function Navbar() {
  return (
    <div className="bg-[#2b2b2b] flex items-center justify-center m-auto  p-2 rounded-lg">
      <div className="flex justify-between w-full items-center">
        <Form />
        <HamburgerMenu />
        <IndexButton />
      </div>
    </div>
  );
}

export default Navbar;
