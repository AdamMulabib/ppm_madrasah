import RedShape from "../assets/shapes/red.svg";
import YellowShape from "../assets/shapes/yellow.svg";
import GreenShape from "../assets/shapes/green.svg";

export default function Tentang() {
  return (
    <section
      id="tentang"
      className="
        relative min-h-screen
        overflow-x-clip
        bg-[#EDE5D8]
        px-6 sm:px-8
        pt-28 pb-36
        text-[#1F1F1F]
      "
    >
      {/* CONTENT */}
      <div className="relative z-20 max-w-3xl">
        <h2 className="text-4xl font-black sm:text-5xl md:text-6xl">
          Tentang Kami
        </h2>

        <p className="mt-6 text-base leading-relaxed sm:text-lg md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque illum molestias, rerum consequatur nemo
          laboriosam.
        </p>
      </div>

      {/* ALAMAT */}
      <p
        className="
          absolute
          bottom-8 sm:bottom-10
          left-6 sm:left-8
          z-20
          max-w-[260px] sm:max-w-xl
          text-sm sm:text-lg md:text-xl
          leading-relaxed
        "
      >
        Perumahan Griya Satria Dampyak blok.A 12 RT.01/RW 09 Tegal
      </p>

      {/* RED */}
      <img
        src={RedShape}
        alt=""
        className="
          absolute
          right-[-90px] sm:right-[-60px] md:right-[-40px]
          top-[90px] sm:top-[70px] md:top-16
          z-10
          w-[180px] sm:w-[240px] md:w-[320px]
          object-contain
          pointer-events-none
        "
      />

      {/* YELLOW */}
      <img
        src={YellowShape}
        alt=""
        className="
          absolute
          right-[70px] sm:right-[180px] md:right-[300px]
          top-[210px] sm:top-[220px] md:top-[250px]
          z-10
          w-[110px] sm:w-[140px] md:w-[180px]
          rotate-[10deg]
          object-contain
          pointer-events-none
        "
      />

      {/* GREEN */}
      <img
        src={GreenShape}
        alt=""
        className="
          absolute
          bottom-[-80px] sm:bottom-[-100px] md:bottom-[-120px]
          right-[-120px] sm:right-[-100px] md:right-[-80px]
          z-10
          w-[260px] sm:w-[340px] md:w-[420px]
          rotate-[-8deg]
          object-contain
          pointer-events-none
        "
      />
    </section>
  );
}