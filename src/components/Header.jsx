import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#1F1F1F] text-[#F8F1E7]">
      <nav className="flex h-20 items-center justify-between px-12">  
        <h1 className="text-3xl font-black">
          Rumah Belajar Hafal Al-Qur'an
        </h1>

        <div className="hidden items-center gap-8 text-lg font-bold md:flex">
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