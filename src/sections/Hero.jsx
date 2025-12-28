import DataImage from "../data";
import CV_Fahri from "/CV_Fahri.pdf";

function Hero() {
  const hasVisited = sessionStorage.getItem("hasVisited");

  return (
    <section className="hero pt-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 items-center gap-6">
          <div
            className={
              hasVisited
                ? ""
                : "animate__animated animate__fadeInUp animate__delay-1s"
            }
          >
            <h1 className="text-3xl md:text-5xl/tight font-bold mb-6">
              Halo, Saya Fahri Rahman 🖐
            </h1>

            <p className="text-base/loose mb-6 opacity-50">
              Saya Junior Frontend Developer yang berfokus pada pembuatan
              website responsif dengan struktur kode yang rapi dan mudah
              dikembangkan menggunakan HTML, CSS, JavaScript, dan React.
            </p>

            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href={CV_Fahri}
                className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition"
              >
                Lihat CV <i className="ri-eye-line ri-lg"></i>
              </a>

              <a
                href="#proyek"
                className="bg-zinc-600 p-4 rounded-2xl hover:bg-zinc-500 transition"
              >
                Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
              </a>
            </div>
          </div>

          <img
            src={DataImage.HeroImage}
            alt="Hero"
            className={
              hasVisited
                ? "w-[500px] md:ml-auto rounded-4xl"
                : "w-[500px] md:ml-auto rounded-4xl animate__animated animate__fadeInUp animate__delay-2s"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
