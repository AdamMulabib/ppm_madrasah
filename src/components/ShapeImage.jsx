export default function ShapeImage({ className = "", label = "shape" }) {
  return (
    <div
      className={`absolute flex items-center justify-center rounded-3xl border-4 border-dashed border-white/40 bg-white/20 text-sm text-white/80 ${className}`}
    >
      {label}
    </div>
  );
}