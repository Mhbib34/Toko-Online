import { Link } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";

export default function FormLogin() {
  return (
    <form className="bg-white/20 backdrop-blur-sm p-10 rounded-2xl flex flex-col md:w-[30%] border-2 text-center shadow-2xl w-[90%]">
      <h1 className="my-2 font-medium md:text-3xl text-xl text-[#9bf272]">
        Login
      </h1>
      <p className="text-sm md:text-md">
        Welcome, Please enter your Login Information
      </p>
      <div className="flex flex-col gap-2 my-4">
        <Input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          className="border p-2 rounded-md border-[#2b2b2b] focus:outline-[#9bf272] "
        />
        <Input
          type="password"
          placeholder="*********"
          name="password"
          className="border p-2 rounded-md border-[#2b2b2b] focus:outline-[#9bf272] "
        />
      </div>
      <p className="font-medium mb-2 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-medium text-blue-800 underline">
          Sign up
        </Link>
      </p>
      <Button
        text="Masuk"
        type="submit"
        className="bg-[#9bf272] border-[#9bf272] hover:bg-[#2b2b2b] hover:text-[#9bf272] transition-all duration-200 ease-in"
      />
    </form>
  );
}
