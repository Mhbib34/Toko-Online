function Button({ type, className, text }) {
  return (
    <button
      type={type}
      className={`p-1 px-2 border border-[#2b2b2b]  cursor-pointer rounded-lg ${className} `}
    >
      {text}
    </button>
  );
}

export default Button;
