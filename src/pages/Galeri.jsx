import PurpleShape from "../assets/shapes/long_purple.svg";

export default function Galeri() {
  return (
    <>
      <section
        id="galeri"
        className="bg-[#EDE5D8] px-6 pb-16 pt-28 text-[#1F1F1F] sm:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-4xl font-black sm:text-5xl md:text-6xl">
            Galeri
          </h2>

          <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[210px] md:grid-cols-4">
            <div className="row-span-2 rounded-lg bg-[#24584A]" />
            <div className="rounded-lg bg-[#24584A]" />
            <div className="rounded-lg bg-[#24584A]" />
            <div className="rounded-lg bg-[#24584A]" />
            <div className="rounded-lg bg-[#24584A]" />
            <div className="rounded-lg bg-[#24584A]" />

            <img
              src={PurpleShape}
              alt=""
              className="row-span-2 h-full w-full rounded-lg object-cover"
            />

            <div className="rounded-lg bg-[#24584A]" />
            <div className="rounded-lg bg-[#24584A]" />
            <div className="rounded-lg bg-[#24584A]" />
          </div>
        </div>
      </section>

    </>
  );
}