import { motion } from "framer-motion";
import RedShape from "../assets/shapes/red.svg";
import YellowShape from "../assets/shapes/yellow.svg";
import PurpleShape from "../assets/shapes/purple_home.svg";

export default function Home() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-[radial-gradient(circle_at_top_left,_#2F7A66_15%,_#24584A_55%,_#16352D_90%)]
        pt-28 sm:pt-32 lg:pt-36
        text-[#F8F1E7]
      "
    >
      {/* PURPLE CHARACTER */}
      <motion.img
          src={PurpleShape}
          alt=""
          initial={{ x: 220, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="
          absolute
          right-[-110px] sm:right-[-90px] md:right-[-70px] lg:right-[-40px] xl:right-[0px]
          top-[190px] sm:top-[160px] md:top-[130px] lg:top-[100px] xl:top-[90px]
          z-10
          w-[260px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[560px]
          rotate-[-1deg]
          object-contain
          pointer-events-none
        "
      />

      {/* YELLOW CHARACTER */}
        <motion.img
          src={YellowShape}
          alt=""
          initial={{ x: 180, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="
          absolute
          right-[150px] sm:right-[220px] md:right-[320px] lg:right-[430px] xl:right-[520px]
          bottom-[80px] sm:bottom-[100px] md:bottom-[120px] lg:bottom-[140px] xl:bottom-[160px]
          z-10
          w-[120px] sm:w-[170px] md:w-[220px] lg:w-[280px] xl:w-[340px]
          rotate-[-5deg]
          object-contain
          pointer-events-none
        "
      />

      {/* RED CHARACTER */}
        <motion.img
          src={RedShape}
          alt=""
          initial={{ x: 260, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="
          absolute
          right-[-110px] sm:right-[-120px] md:right-[-130px] lg:right-[-120px] xl:right-[-80px]
          bottom-[-35px] sm:bottom-[-45px] md:bottom-[-55px] lg:bottom-[-60px] xl:bottom-[-50px]
          z-10
          w-[240px] sm:w-[300px] md:w-[370px] lg:w-[460px] xl:w-[520px]
          rotate-[40deg]
          object-contain
          pointer-events-none
        "
      />

      

      {/* CONTENT */}
      <div
        className="
          relative z-20
          mx-auto max-w-7xl
          px-6 sm:px-8 lg:px-12
          py-20 sm:py-24 md:py-28 lg:py-32
        "
      >
        <h1
          className="
            max-w-[720px]
            text-[38px] sm:text-[48px] md:text-[58px] lg:text-[68px] xl:text-[76px]
            font-black
            leading-[0.95]
            tracking-[-1.5px]
          "
        >
          Rumah Belajar Hafal Al-Qur'an
        </h1>

        <p
          className="
            mt-6 max-w-xl
            text-base sm:text-lg md:text-xl
            leading-relaxed
            text-white/75
          "
        >
          Tempat belajar Al-Qur'an yang nyaman, modern, dan menyenangkan.
        </p>
      </div>
    </section>
  );
}