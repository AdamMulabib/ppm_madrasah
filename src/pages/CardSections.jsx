import { motion } from "framer-motion";
import Zigzag from "../assets/shapes/zigzag.svg";
import GreenShape from "../assets/shapes/green.svg";
import YellowShape from "../assets/shapes/yellow.svg";
import RedShape from "../assets/shapes/red_ke_kanan.svg";

  export default function CardsSections() {
    const cards = [
      { nama: "Card 1", deskripsi: "Deskripsi card 1" },
      { nama: "Card 2", deskripsi: "Deskripsi card 2" },
      { nama: "Card 3", deskripsi: "Deskripsi card 3" },
      { nama: "Card 4", deskripsi: "Deskripsi card 4" },
    ];

    return (
      <section className="relative min-h-screen overflow-x-clip bg-[#EDE5D8] text-[#1F1F1F]">
        <img
          src={Zigzag}
          alt=""
          className="absolute 
          left-[0%] 
           top-[-85px] sm:top-[-100px] md:top-[-120px]
          z-20 
          h-[170px] sm:h-[220px] md:h-[260px]
          w-[210%] 
          object-cover 
          pointer-events-none"
          />

        {/* YELLOW */}
        <motion.img
          src={YellowShape}
          alt=""
          initial={{ x: 180, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="
          absolute
          right-[-85px] sm:right-[-40px] md:right-[-10px] lg:right-[0px]
          top-[170px] sm:top-[170px] md:top-[180px]
          z-10
          w-[180px] sm:w-[210px] md:w-[230px] lg:w-[250px]
          rotate-[-45deg]
          object-contain
          pointer-events-none
        "
      />

      <motion.img
        src={RedShape}
        alt=""
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0 }}
        className="
          absolute
          left-[-70px] sm:left-[-120px] md:left-[-80px]
          bottom-[-110px] sm:bottom-[-100px] md:bottom-[-90px]
          z-10
          w-[300px] sm:w-[380px] md:w-[460px]
          rotate-[-30deg]
          object-contain
          pointer-events-none
        "
      />

      {/* GREEN */}
      <motion.img
        src={GreenShape}
        alt=""
        initial={{ x: 140, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0 }}
        className="
          absolute
          right-[-70px] sm:right-[-110px] md:right-[-60px]
          bottom-[120px] sm:bottom-[40px] md:bottom-[-120px]
          z-10
          w-[320px] sm:w-[410px] md:w-[490px]
          object-contain
          pointer-events-none
        "
      />

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center on px-8 pt-28">
          <div className="grid gap-9 md:grid-cols-4">
            {cards.map((item, index) => (
               <motion.div
                  key={index}
                  initial={{ y: 80, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="
                    w-[190px]
                    overflow-hidden
                    rounded-[15px]
                    bg-[#7E8CE0]
                    transition duration-300
                    hover:-translate-y-2
                  "
                >
                  <div className="h-36 rounded-[19px] border-[9px] border-[#7E8CE0] bg-[#EDE5D8]">
                    {/* nanti foto masuk di sini */}
                  </div>

                  <div className="px-4 pb-5 pt-2">
                    <h3 className="text-xl font-black">{item.nama}</h3>
                    <p className="mt-1 leading-tight">{item.deskripsi}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }