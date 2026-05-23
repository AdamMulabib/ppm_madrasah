import YellowShape from "../assets/shapes/yellow.svg";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1F1F1F] px-6 py-10 text-[#F8F1E7] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        
        {/* KONTAK */}
        <div>
          <h3 className="text-2xl font-black">Kontak</h3>

          <p className="mt-2 text-lg text-white/80">
            +62 877-4029-7720
          </p>
        </div>

        {/* LOKASI */}
        <div>
          <h3 className="text-2xl font-black">Lokasi</h3>

          <p className="mt-2 max-w-[220px] text-lg leading-relaxed text-white/80">
            Perumahan Griya
            <br />
            Satria Dampyak
            <br />
            Blok.A 12
            <br />
            RT.01/RW 09
            <br />
            Tegal
          </p>
        </div>

        {/* MENU */}
        <div className="space-y-2 text-lg text-white/80">
          <p>Home</p>
          <p>Galeri</p>
          <p>Tentang</p>
        </div>

        {/* SHAPE + BRAND */}
        <div className="relative min-h-[220px]">
          <img
            src={YellowShape}
            alt=""
            className="
              absolute
              right-50px
              top-[-30px]
              w-[180px]
              rotate-[-15deg]
              object-contain
              pointer-events-none
            "
          />

          <h2
            className="
              absolute
              bottom-0
              right-0
              text-right
              text-2xl
              font-black
              leading-tight
            "
          >
            Rumah Belajar
            <br />
            Hafal Al-Qur'an
          </h2>
        </div>
      </div>
    </footer>
  );
}