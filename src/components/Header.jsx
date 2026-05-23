import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#1F1F1F] text-[#F8F1E7]">
      <nav className="flex h-20 items-center justify-between px-3 sm:px-6 md:px-12">
        <h1 className="max-w-[150px] text-base font-black leading-tight sm:max-w-none sm:text-2xl md:text-3xl">
          Rumah Belajar Hafal Al-Qur'an
        </h1>

        <div className="flex items-center gap-3 text-xs font-bold sm:gap-6 sm:text-base md:gap-8 md:text-lg">
          <Link to="/" className="text-[#E53935] transition duration-300 hover:-translate-y-1 hover:scale-110">
            Home
          </Link>

          <Link to="/galeri" className="text-[#F4C542] transition duration-300 hover:-translate-y-1 hover:scale-110">
            Galeri
          </Link>

          <Link to="/tentang" className="text-[#7E8CE0] transition duration-300 hover:-translate-y-1 hover:scale-110">
            Tentang
          </Link>
        </div>
      </nav>
    </header>
  );
}