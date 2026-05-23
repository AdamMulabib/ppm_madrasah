import { Link } from "react-router-dom";

export default function GaleriPreview() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F4C542] text-[#1F1F1F]">
      {/* KOTAK MERAH ATAS */}
      <div className="absolute left-0 top-[90px] h-[120px] w-[32%] bg-[#C9423A] sm:top-[130px] sm:h-[150px] md:top-[150px] md:h-[190px] md:w-[35%]" />
      <div className="absolute right-0 top-[90px] h-[120px] w-[32%] bg-[#C9423A] sm:top-[130px] sm:h-[150px] md:top-[150px] md:h-[190px] md:w-[35%]" />

      {/* KOTAK MERAH TENGAH */}
      <div className="absolute left-0 top-[280px] h-[120px] w-[28%] bg-[#C9423A] sm:top-[340px] sm:h-[150px] md:top-[380px] md:h-[190px] md:w-[30%]" />
      <div className="absolute right-0 top-[280px] h-[120px] w-[28%] bg-[#C9423A] sm:top-[340px] sm:h-[150px] md:top-[380px] md:h-[190px] md:w-[30%]" />

      {/* KOTAK MERAH BAWAH */}
      <div className="absolute left-0 bottom-[90px] h-[120px] w-[32%] bg-[#C9423A] sm:bottom-[90px] sm:h-[150px] md:bottom-[100px] md:h-[190px] md:w-[35%]" />
      <div className="absolute right-0 bottom-[90px] h-[120px] w-[32%] bg-[#C9423A] sm:bottom-[90px] sm:h-[150px] md:bottom-[100px] md:h-[190px] md:w-[35%]" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h2 className="text-4xl font-black sm:text-5xl md:text-6xl">
          Lihat Galeri
        </h2>

        <Link
          to="/galeri"
          className="mt-6 rounded-lg bg-[#F8F1E7] px-12 py-3 text-lg font-bold transition hover:scale-110 sm:px-16 sm:text-xl md:px-20"
        >
          Lihat Galeri
        </Link>
      </div>
    </section>
  );
}