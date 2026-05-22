import RedShape from "../assets/shapes/red.svg";
import YellowShape from "../assets/shapes/yellow.svg";
import PurpleShape from "../assets/shapes/purple_home.svg";

export default function Home() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[radial-gradient(circle_at_top_left,_#2F7A66_15%,_#24584A_55%,_#16352D_90%)]
        pt-32
        text-[#F8F1E7]
      "
    >
      {/* CHARACTER SVG */}

      <img
        src={PurpleShape}
        alt=""
        className="
          absolute
          right-20
          left-[75%]
          top-30
          z-10
          w-[450px]
          rotate-[-1deg]
          object-contain
          pointer-events-none
        "
      />

      <img
        src={YellowShape}
        alt=""
        className="
          absolute
          right-50
          left-[62%]
          bottom-80
          z-10
          w-[250px]
          rotate-[-5deg]
          object-contain
          pointer-events-none
        "
      />

      <img
        src={RedShape}
        alt=""
        className="
          absolute
          right-40
          left-[75%]
          bottom-10
          z-10
          w-[350px]
          rotate-[40deg]
          object-contain
          pointer-events-none
        "
      />

      {/* CONTENT */}

      <div className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <h1 className="max-w-3xl text-6xl font-black leading-tight">
          Rumah Belajar Hafal Al-Qur'an
        </h1>

        <p className="mt-6 max-w-xl text-lg text-white/70">
          Tempat belajar Al-Qur'an yang nyaman, modern, dan menyenangkan.
        </p>
      </div>
    </section>
  );
}