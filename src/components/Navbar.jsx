import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full py-4 md:py-7 transition-opacity duration-300
      ${mounted ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg md:text-3xl font-bold tracking-wide text-white">
          Fahri <span className="text-violet-500">Rahman</span>
        </h1>

        {/* Menu */}
        <ul
          className={`menu flex items-center gap-3 md:gap-10
          md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 
          md:opacity-100

          bg-white/20 md:bg-transparent
          backdrop-blur-md md:backdrop-blur-0

          px-6 py-3 md:p-0
          rounded-b-2xl md:rounded-none

          shadow-md md:shadow-none

          transition-all duration-300 ease-out
          z-40 ${active ? "top-0 opacity-100" : "-top-16 opacity-0"}`}
        >
          {["Beranda", "Tentang", "Sertifikat", "Proyek", "Kontak"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm md:text-base font-medium transition-colors duration-300 hover:text-violet-400"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
