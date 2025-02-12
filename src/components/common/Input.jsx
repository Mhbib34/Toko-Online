function Input({ type, name, placeholder, className, checked, onChange }) {
  return (
    <>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={className}
        checked={checked}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
