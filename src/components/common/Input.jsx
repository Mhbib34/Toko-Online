function Input({ type, name, placeholder }) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full rounded-md px-2 text-white focus:outline-none "
      />
    </>
  );
}

export default Input;
