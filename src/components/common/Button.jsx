function Button({ type, className, text, onClick }) {
  return (
    <button
      type={type}
      className={`p-1 px-2 border cursor-pointer rounded-lg ${className} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
