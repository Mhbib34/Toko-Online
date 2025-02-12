function HamburgerMenu({ onClick }) {
  return (
    <div
      className="md:hidden flex items-center cursor-pointer"
      onClick={onClick}
    >
      <i className="bx bx-menu text-white text-2xl px-4"></i>
    </div>
  );
}

export default HamburgerMenu;
