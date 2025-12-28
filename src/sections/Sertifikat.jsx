import { listSertifikat } from "../data";

function Sertifikat() {
  return (
    <div className="sertifikat mt-32 py-10" id="sertifikat">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up">
        Sertifikat
      </h1>

      <p
        className="text-base/loose text-center opacity-50 mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Beberapa sertifikat yang saya peroleh selama proses belajar frontend.
      </p>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {listSertifikat.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-800 p-4 rounded-lg hover:bg-zinc-700 transition flex flex-col"
            data-aos="fade-up"
            data-aos-delay={item.dad}
          >
            <img
              src={item.gambar}
              alt={item.nama}
              className="rounded-md mb-4"
              loading="lazy"
            />

            <h3 className="font-semibold text-lg min-h-[3.5rem]">
              {item.nama}
            </h3>

            <p className="text-sm opacity-50 mb-3">{item.platform}</p>
            <p className="text-sm opacity-60 mb-4 flex-1">{item.desk}</p>

            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline text-sm mt-auto"
              >
                Lihat Sertifikat →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sertifikat;
