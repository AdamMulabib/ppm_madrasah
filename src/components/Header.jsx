import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#1F1F1F] text-[#F8F1E7]">
      <nav className="flex h-20 items-center justify-between px-3 sm:px-6 md:px-12">
        <h1 className="max-w-[150px] text-base font-black leading-tight sm:max-w-none sm:text-2xl md:text-3xl">
          Rumah Belajar Hafal Al-Qur'an
        </h1>

        <div className="flex items-center gap-3 text-xs font-bold sm:gap-6 sm:text-base md:gap-8 md:text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
              transition duration-300
              hover:scale-110
              ${
                isActive
                  ? "text-[#FFFDF8] [-webkit-text-stroke:2px_#E53935] drop-shadow-[0_0_8px_#ffffff] font-extrabold"
                  : "text-[#E53935]"
              }
            `
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/galeri"
            className={({ isActive }) =>
              `
              transition duration-300
              hover:scale-110
              ${
                isActive
                  ? "text-[#FFFDF8] [-webkit-text-stroke:2px_#F4C542] drop-shadow-[0_0_8px_#ffffff] font-extrabold"
                  : "text-[#F4C542]"
              }
            `
            }
          >
            Galeri
          </NavLink>

          <NavLink
            to="/tentang"
            className={({ isActive }) =>
              `
              transition duration-300
              hover:scale-110
              ${
                isActive
                  ? "text-[#FFFDF8] [-webkit-text-stroke:2px_#7E8CE0] drop-shadow-[0_0_8px_#ffffff] font-extrabold"
                  : "text-[#7E8CE0]"
              }
            `
            }
          >
            Tentang
          </NavLink>
        </div>
      </nav>
    </header>
  );
}