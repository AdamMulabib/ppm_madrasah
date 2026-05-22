export default function SectionDivider({ color = "#F8F1E7" }) {
  return (
    <div
      className="h-12 w-full"
      style={{
        backgroundColor: color,
        clipPath:
          "polygon(0 35%, 5% 65%, 10% 35%, 15% 65%, 20% 35%, 25% 65%, 30% 35%, 35% 65%, 40% 35%, 45% 65%, 50% 35%, 55% 65%, 60% 35%, 65% 65%, 70% 35%, 75% 65%, 80% 35%, 85% 65%, 90% 35%, 95% 65%, 100% 35%, 100% 100%, 0 100%)",
      }}
    />
  );
}