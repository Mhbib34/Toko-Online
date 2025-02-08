import Button from "../common/Button";
import Input from "../common/Input";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <div className="bg-white/20 backdrop-blur-sm py-10 px-10 rounded-2xl flex flex-col md:w-[30%] w-[90%] text-center border-2 shadow-2xl">
      <h1 className="my-2 font-medium text-3xl text-[#9bf272]">Register</h1>
      <p className="">Welcome, Please enter your Login Information</p>
      <div className="flex flex-col gap-2 my-4">
        <Input
          type="text"
          placeholder="Enter your full name"
          name="nama"
          className="border p-2 rounded-md border-[#2b2b2b] focus:outline-[#9bf272] "
        />
        <Input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          className="border p-2 rounded-md border-[#2b2b2b] focus:outline-[#9bf272]"
        />
        <Input
          type="password"
          placeholder="Enter your password"
          name="password"
          className="border p-2 rounded-md border-[#2b2b2b] focus:outline-[#9bf272]"
        />
        <Input
          type="password"
          placeholder="Confirm password"
          name="confirm password"
          className="border p-2 rounded-md border-[#2b2b2b] focus:outline-[#9bf272]"
        />
      </div>
      <p className="font-medium mb-3 ">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-blue-800 underline">
          Sign in
        </Link>
      </p>
      <Button
        type="submit"
        text="Daftar"
        className="bg-[#9bf272] border-[#9bf272] hover:bg-[#2b2b2b] hover:text-[#9bf272] transition-all duration-200 ease-in"
      />
    </div>
  );
}
