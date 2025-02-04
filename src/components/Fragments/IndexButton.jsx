import Button from "../common/Button";

function IndexButton() {
  return (
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
  );
}

export default IndexButton;
