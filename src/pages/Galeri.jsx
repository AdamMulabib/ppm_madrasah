import PurpleShape from "../assets/shapes/long_purple.svg";

export default function Galeri() {
  return (
    <section
      id="galeri"
      className="min-h-screen bg-[#EDE5D8] px-8 pb-16 pt-28 text-[#1F1F1F]"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-5xl font-black">Galeri</h2>

        <div className="grid grid-cols-4 grid-rows-3 gap-4">
          <div className="row-span-2 rounded-lg bg-[#24584A]" />

          <div className="h-52 rounded-lg bg-[#24584A]" />
          <div className="h-52 rounded-lg bg-[#24584A]" />
          <div className="h-52 rounded-lg bg-[#24584A]" />

          <div className="h-52 rounded-lg bg-[#24584A]" />
          <div className="h-52 rounded-lg bg-[#24584A]" />

          <img
            src={PurpleShape}
            alt=""
            className="row-span-2 h-[440px] min-h-[280px] w-full rounded-lg object-cover"
          />

          <div className="h-52 rounded-lg bg-[#24584A]" />
          <div className="h-52 rounded-lg bg-[#24584A]" />
          <div className="h-52 rounded-lg bg-[#24584A]" />
        </div>
      </div>
    </section>
  );
}