import { listProyek } from "../data";

function Proyek() {
  return (
    <div className="proyek mt-32 py-10" id="proyek">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up">
        Proyek
      </h1>

      <p className="text-base/loose text-center opacity-50" data-aos="fade-up">
        Berikut beberapa proyek frontend yang telah saya kerjakan.
      </p>

      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="flex flex-col p-4 bg-zinc-800 rounded-md"
            data-aos="fade-up"
            data-aos-delay={proyek.dad}
          >
            <img src={proyek.gambar} alt={proyek.nama} loading="lazy" />

            <div className="flex flex-col flex-1 justify-between">
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>

                <p className="text-base/loose mb-4">{proyek.desk}</p>

                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="py-1 px-3 bg-zinc-500 rounded-md font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href={proyek.url}
                  className="bg-violet-700 p-3 rounded-lg block hover:bg-violet-600"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyek;
