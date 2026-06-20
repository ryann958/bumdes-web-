export default function Card({ children, className = '' }) {
  return (
    <div className={`p-4 md:p-6 rounded-2xl shadow-neumorphic bg-background ${className}`}>
      {children}
    </div>
  );
}
