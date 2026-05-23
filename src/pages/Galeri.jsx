import { motion } from "framer-motion";

import PurpleShape from "../assets/shapes/long_purple.svg";

export default function Galeri() {
  return (
    <>
      <section
        id="galeri"
        className="bg-[#EDE5D8] px-6 pb-16 pt-28 text-[#1F1F1F] sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-8 text-4xl font-black sm:text-5xl md:text-6xl"
          >
            Galeri
          </motion.h2>

          <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[210px] md:grid-cols-4">
            {/* CARD 1 */}
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="row-span-2 rounded-lg bg-[#24584A]"
            />

            {/* CARD 2 */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-lg bg-[#24584A]"
            />

            {/* CARD 3 */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-lg bg-[#24584A]"
            />

            {/* CARD 4 */}
            <motion.div
              initial={{ x: 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-lg bg-[#24584A]"
            />

            {/* CARD 5 */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-lg bg-[#24584A]"
            />

            {/* CARD 6 */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-lg bg-[#24584A]"
            />

            {/* PURPLE IMAGE */}
            <motion.img
              src={PurpleShape}
              alt=""
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
              className="
                row-span-2
                h-full
                w-full
                rounded-lg
                object-cover
              "
            />

            {/* CARD 7 */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-lg bg-[#24584A]"
            />

            {/* CARD 8 */}
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-lg bg-[#24584A]"
            />

            {/* CARD 9 */}
            <motion.div
              initial={{ x: 120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="rounded-lg bg-[#24584A]"
            />
          </div>
        </div>
      </section>
    </>
  );
}