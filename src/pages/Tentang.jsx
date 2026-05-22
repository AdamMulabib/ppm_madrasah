import RedShape from "../assets/shapes/red.svg";
import YellowShape from "../assets/shapes/yellow.svg";
import GreenShape from "../assets/shapes/green.svg";

export default function Tentang() {
  return (
    <section
      id="tentang"
      className="relative min-h-screen overflow-hidden bg-[#EDE5D8] px-8 py-28 text-[#1F1F1F]"
    >
      <div className="relative z-10">
        <h2 className="text-6xl font-black">Tetang Kami</h2>

        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit amet
        </p>
      </div>

      <p className="absolute bottom-10 left-8 z-10 text-xl">
        Perumahan Griya Satria Dampyak blok.A 12 RT.01/RW 09 Tegal
      </p>

      <img
        src={RedShape}
        alt=""
        className="absolute right-[-80px] top-16 z-10 w-[320px] object-contain"
      />

      <img
        src={YellowShape}
        alt=""
        className="absolute right-[300px] top-[250px] z-10 w-[180px] rotate-[10deg] object-contain"
      />

      <img
        src={GreenShape}
        alt=""
        className="absolute bottom-[-120px] right-[-80px] z-10 w-[420px] rotate-[-8deg] object-contain"
      />
    </section>
  );
}