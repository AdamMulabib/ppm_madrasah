import YellowShape from "../assets/shapes/yellow.svg";
import RedShape from "../assets/shapes/red_ke_kanan.svg";

export default function TentangPreview() {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-[#C9423A] text-[#F8F1E7]">

      {/* DECORATION */}
      <img
        src={YellowShape}
        alt=""
        className="
          absolute
          right-[-80px] sm:right-[-40px] md:right-[0px]
          top-[180px]
          z-10
          w-[170px] sm:w-[220px] md:w-[260px]
          rotate-[20deg]
          object-contain
          pointer-events-none
        "
      />


      {/* CONTENT */}
      <div className="relative z-20 px-8 pt-40 sm:pt-44 md:pt-48">
        <h2
          className="
            max-w-3xl
            text-4xl sm:text-5xl md:text-6xl
            font-black
            leading-tight
          "
        >
          Tentang Kami
        </h2>

        <p
          className="
            mt-6
            max-w-2xl
            text-base sm:text-lg md:text-xl
            leading-relaxed
            text-white/80
          "
        >
          TPQ ini merupakan tempat belajar Al-Qur'an yang nyaman,
          modern, dan menyenangkan untuk anak-anak.
        </p>
      </div>
    </section>
  );
}