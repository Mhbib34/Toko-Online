import HamburgerMenu from "../common/HamburgerMenu";
import Form from "../Fragments/Form";
import IndexButton from "../Fragments/IndexButton";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#2b2b2b] flex items-center justify-center m-auto sticky top-2 z-10 p-2 rounded-lg">
      <div className="flex justify-between w-full items-center">
        <Link to="/">
          <img src={Logo} alt="" className="h-12 w-32" />
        </Link>
        <Form />
        <HamburgerMenu />
        <IndexButton />
      </div>
    </div>
  );
}

export default Navbar;
