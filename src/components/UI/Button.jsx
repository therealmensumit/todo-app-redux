export const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 text-white rounded-e transition-all duration-200 ${className}`}>
      {children}
    </button>
  );
};
