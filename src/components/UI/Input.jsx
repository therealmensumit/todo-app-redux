export const Input = ({ type, onChange, value, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`px-4 py-2 rounded-s focus:outline-0 focus:bg-slate-100 ${className}`}
    />
  );
};
