export default function GaleriPreview() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F4C542] px-8 py-8 text-[#1F1F1F]">
      <div className="absolute left-0 top-32 h-48 w-[35%] bg-[#C9423A]" />
      <div className="absolute right-0 top-32 h-48 w-[35%] bg-[#C9423A]" />

      <div className="absolute left-0 top-96 h-48 w-[30%] bg-[#C9423A]" />
      <div className="absolute right-0 top-96 h-48 w-[30%] bg-[#C9423A]" />

      <div className="absolute left-0 bottom-20 h-48 w-[35%] bg-[#C9423A]" />
      <div className="absolute right-0 bottom-20 h-48 w-[35%] bg-[#C9423A]" />

      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-black">Lihat Galeri</h2>

        <a
          href="#galeri"
          className="mt-6 rounded-lg bg-[#F8F1E7] px-20 py-3 text-xl font-bold transition hover:scale-110"
        >
          Lihat Galeri
        </a>
      </div>
    </section>
  );
}