import Zigzag from "../assets/shapes/zigzag.svg";
import GreenShape from "../assets/shapes/green.svg";
import YellowShape from "../assets/shapes/yellow.svg";
import PurpleShape from "../assets/shapes/purple.svg";

export default function CardsSections() {
  const cards = [
    { nama: "Card 1", deskripsi: "Deskripsi card 1" },
    { nama: "Card 2", deskripsi: "Deskripsi card 2" },
    { nama: "Card 3", deskripsi: "Deskripsi card 3" },
    { nama: "Card 4", deskripsi: "Deskripsi card 4" },
  ];

  return (
    <section className="relative min-h-screen bg-[#EDE5D8] text-[#1F1F1F]">
      <img
        src={Zigzag}
        alt=""
        className="absolute left-[0%] top-[-100px] z-20 h-[260px] w-[210%] object-cover pointer-events-none"
        />

         <img
        src={YellowShape}
        alt=""
        className="absolute right-[-10px] 
        top-[180px] 
        z-30 
        w-[250px] 
        rotate-[-45deg] 
        object-contain 
        pointer-events-none"
      />

      <img
        src={PurpleShape}
        alt=""
        className="absolute 
        left-[-80px] 
        bottom-[-90px] 
        z-20 
        w-[460px] 
        rotate-[-30deg] 
        object-contain 
        pointer-events-none"
      />

      <img
        src={GreenShape}
        alt=""
        className="absolute 
        right-[-60px] 
        bottom-[-120px] 
        z-20 w-[490px] 
        rotate-[0deg] 
        object-contain 
        pointer-events-none"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8 pt-28">
        <div className="grid gap-9 md:grid-cols-4">
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-[190px] overflow-hidden rounded-[15px] bg-[#7E8CE0]"
            >
              <div className="h-36 rounded-[19px] border-[9px] border-[#7E8CE0] bg-[#EDE5D8]">
                {/* nanti foto masuk di sini */}
              </div>

              <div className="px-4 pb-5 pt-2">
                <h3 className="text-xl font-black">{item.nama}</h3>
                <p className="mt-1 leading-tight">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}