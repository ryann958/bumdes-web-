export default function Button({ children, onClick, className = '', type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-neumorphic hover:shadow-neumorphic-inset active:shadow-neumorphic-inset text-foreground ${className}`}
    >
      {children}
    </button>
  );
}
