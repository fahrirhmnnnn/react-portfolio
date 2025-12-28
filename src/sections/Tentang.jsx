import DataImage from "../data";
import Tools from "./Tools";

function Tentang() {
  return (
    <div className="tentang mt-32 py-10" id="tentang">
      <div
        className="xl:w-2/3 lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-once="true"
      >
        <img
          src={DataImage.HeroImage}
          alt="Profile"
          className="w-12 rounded-md mb-10 sm:hidden"
          loading="lazy"
        />

        <p className="text-md md:text-base/loose mb-10">
          Saya Fahri Rahman, Junior Frontend Developer yang memiliki
          ketertarikan pada pengembangan antarmuka website. Saya terbiasa
          membangun tampilan yang responsif, rapi, dan mudah digunakan, serta
          menulis kode yang terstruktur agar mudah dikembangkan di masa depan.
        </p>

        <div className="flex items-center justify-between">
          <img
            src={DataImage.HeroImage}
            alt="Profile"
            className="w-12 rounded-md sm:block hidden"
            loading="lazy"
          />

          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                5<span className="text-violet-500">+</span>
              </h1>
              <p>Proyek Selesai</p>
            </div>

            <div>
              <h1 className="text-4xl mb-1">
                1<span className="text-violet-500">+</span>
              </h1>
              <p>Tahun Belajar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools */}
      <Tools />
    </div>
  );
}

export default Tentang;
