function Button({ type, className, text }) {
  return (
    <button
      type={type}
      className={`p-1 px-2 border cursor-pointer rounded-lg ${className} `}
    >
      {text}
    </button>
  );
}

export default Button;
