import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-4 md:py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-xl md:text-3xl font-bold tracking-wide text-white">
          Fahri <span className="text-violet-500">Rahman</span>
        </h1>
      </div>

      <ul
        className={`menu flex items-center sm:gap-10 gap-3
        md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 
        md:opacity-100

        bg-white/20 md:bg-transparent
        backdrop-blur-md md:backdrop-blur-0

        p-4 md:p-0
        rounded-br-2xl rounded-bl-2xl md:rounded-none

        shadow-md md:shadow-none

        transition-all duration-300 ease-out
        z-40 ${active ? "top-0 opacity-100" : "-top-12 opacity-0"}`}
      >
        <li>
          <a
            href="#beranda"
            className="sm:text-lg text-base font-medium transition-colors duration-300 hover:text-violet-400"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            className="sm:text-lg text-base font-medium transition-colors duration-300 hover:text-violet-400"
          >
            Tentang
          </a>
        </li>
        <li>
          <a
            href="#sertifikat"
            className="sm:text-lg text-base font-medium transition-colors duration-300 hover:text-violet-400"
          >
            Sertifikat
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            className="sm:text-lg text-base font-medium transition-colors duration-300 hover:text-violet-400"
          >
            Proyek
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            className="sm:text-lg text-base font-medium transition-colors duration-300 hover:text-violet-400"
          >
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
