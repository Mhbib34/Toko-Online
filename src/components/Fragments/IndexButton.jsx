import { Link } from "react-router-dom";
import Button from "../common/Button";

function IndexButton() {
  return (
    <div className="hidden md:flex gap-2 justify-center px-4 items-center md:border-l-2 md:border-white">
      <Link to="/login">
        <Button
          type="submit"
          className={
            "text-[#9bf272]  hover:border border border-[#2b2b2b] hover:border-[#9bf272] transition-all duration-200 ease-in"
          }
          text={"Masuk"}
        />
      </Link>
      <Link to="/register">
        <Button
          type="submit"
          className={
            "bg-[#9bf272] text-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-[#9bf272] transition-all duration-200 ease-in"
          }
          text={"Daftar"}
        />
      </Link>
    </div>
  );
}

export default IndexButton;
