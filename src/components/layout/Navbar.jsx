import { useState } from "react";
import HamburgerMenu from "../common/HamburgerMenu";
import Form from "../Fragments/Form";
import IndexButton from "../Fragments/IndexButton";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import HamburgerMenuPages from "../Fragments/HamburgerMenuPages";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-2 z-10">
      <div className="bg-[#2b2b2b] flex items-center justify-center m-auto p-2 rounded-lg">
        <div className="flex justify-between w-full items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-12 w-32" />
          </Link>
          <Form />
          <HamburgerMenu onClick={toggleMenu} />
          <IndexButton />
        </div>
      </div>
      <HamburgerMenuPages
        className={`md:hidden bg-[#2b2b2b] relative py-4 px-2 -mt-1 w-full transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      />
    </div>
  );
}

export default Navbar;
