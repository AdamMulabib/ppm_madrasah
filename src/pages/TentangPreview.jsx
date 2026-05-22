export default function TentangPreview() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#C9423A] text-[#F8F1E7]">
      
      {/* CONTENT */}
      <div className="relative z-10 px-8 pt-32">
        <h2 className="text-6xl font-black">Tetang Kami</h2>

        <p className="mt-6 text-xl text-white/80">
          TPQ ini ...
        </p>
      </div>

      {/* ZIGZAG */}
      <div
        className="absolute bottom-0 left-0 h-52 w-full bg-[#F4C542]"
        style={{
          clipPath:
            "polygon(0 35%, 25% 0%, 70% 45%, 100% 0%, 100% 40%, 100% 100%, 0 100%)",
        }}
      />
    </section>
  );
}