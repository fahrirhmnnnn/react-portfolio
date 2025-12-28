import { listTools } from "../data";

function Tools() {
  return (
    <div className="tools mt-32">
      <h1
        className="text-4xl/snug font-bold mb-4"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-once="true"
      >
        Tools yang dipakai
      </h1>

      <p
        className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
        data-aos-once="true"
      >
        Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website
        :
      </p>

      <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listTools.map((tool) => (
          <div
            className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-900 group cursor-pointer"
            key={tool.id}
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay={tool.dad}
            data-aos-once="true"
          >
            <img
              src={tool.gambar}
              alt="Tools Image"
              className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
            />

            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
