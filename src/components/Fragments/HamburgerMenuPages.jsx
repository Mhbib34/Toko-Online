import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function HamburgerMenuPages({ className }) {
  return (
    <div className={className}>
      <div className="flex flex-col w-full gap-2">
        <Link
          to="/login"
          className="hover:border-b hover:border-[#9bf272] transition-all duration-200 ease-in"
        >
          <Button
            type="submit"
            className={"text-[#9bf272]  border-none "}
            text={"Masuk"}
          />
        </Link>
        <Link
          to="/register"
          className="hover:border-b hover:border-[#9bf272] transition-all duration-200 ease-in"
        >
          <Button
            type="submit"
            className={
              "text-[#9bf272] border-none  transition-all duration-200 ease-in"
            }
            text={"Daftar"}
          />
        </Link>
        <Link
          to="/cart"
          className="hover:border-b hover:border-[#9bf272] transition-all duration-200 ease-in"
        >
          <Button
            type="submit"
            className={
              "text-[#9bf272] border-none  transition-all duration-200 ease-in"
            }
            text={"Keranjang"}
          />
        </Link>
      </div>
    </div>
  );
}
