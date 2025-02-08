function Input({ type, name, placeholder, className }) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
}

export default Input;
