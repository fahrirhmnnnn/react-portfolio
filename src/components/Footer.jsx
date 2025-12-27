const Footer = () => {
  return (
    <div className="mt-24 py-6 md:py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-lg md:text-2xl font-bold">
        Fahri <span className="text-violet-500">Rahman</span>
      </h1>
      <div className="gap-4 md:gap-7 flex flex-wrap text-sm md:text-base">
        <a href="#beranda" className="hover:text-violet-400">
          Beranda
        </a>
        <a href="#tentang" className="hover:text-violet-400">
          Tentang
        </a>
        <a href="#sertifikat" className="hover:text-violet-400">
          Sertifikat
        </a>
        <a href="#proyek" className="hover:text-violet-400">
          Proyek
        </a>
        <a href="#kontak" className="hover:text-violet-400">
          Kontak
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/fahrirhmnnnn">
          <i className="ri-github-fill text-xl md:text-2xl hover:text-violet-400"></i>
        </a>
        <a href="https://instagram.com/fhrhmnnnn">
          <i className="ri-instagram-fill text-xl md:text-2xl hover:text-violet-400"></i>
        </a>
        <a href="https://linkedin.com/in/fahrirhmnnnn">
          <i className="ri-linkedin-fill text-xl md:text-2xlhover:text-violet-400"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
