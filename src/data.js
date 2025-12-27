import HeroImage from "/assets/fahribg.png";

const Image = {
  HeroImage,
};

export default Image;

// Tools
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/bootstrap.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/nodejs.png";
import Tools7 from "/assets/tools/github.png";
import Tools8 from "/assets/tools/canva.png";
// import Tools9 from "/assets/tools/figma.png";
// import Tools10 from "/assets/tools/nextjs.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: 0,
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Library",
    dad: 100,
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: 200,
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Bootstrap",
    ket: "Framework",
    dad: 300,
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Javascript",
    ket: "Language",
    dad: 400,
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: 500,
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Github",
    ket: "Repository",
    dad: 600,
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Canva",
    ket: "Design App",
    dad: 700,
  },
  // {
  //   id: 9,
  //   gambar: Tools9,
  //   nama: "Figma",
  //   ket: "Design App",
  //   dad: 900,
  // },
  // {
  //   id: 10,
  //   gambar: Tools10,
  //   nama: "Next JS",
  //   ket: "Framework",
  //   dad: "1000",
  // },
];

// proyek
import Proyek1 from "/assets/proyek/Proyek1.png";
import Proyek2 from "/assets/proyek/Proyek2.png";
import Proyek3 from "/assets/proyek/Proyek3.png";

// sertifikat
import sertifikat1 from "/assets/sertifikat/sertifikat1.png";
import sertifikat2 from "/assets/sertifikat/sertifikat2.png";
import sertifikat3 from "/assets/sertifikat/sertifikat3.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Wedding Website",
    desk: " Dibuat menggunakan kombinasi HTML, CSS, dan JavaScript. Proyek ini dirancang untuk memberikan pengalaman pengguna yang responsif, estetis, dan fungsional.",
    tools: ["HTML", "CSS", "JavaScript", "AOS"],
    dad: 0,
    url: "https://fahrirhmnnnn.github.io/wedding-website/",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Portfolio Website",
    desk: "Dibuat menggunakan kombinasi HTML, CSS, JavaScript, PostCSS, dan TailwindCSS. Proyek ini dirancang untuk memberikan pengalaman pengguna yang responsif, estetis, dan fungsional.",
    tools: ["HTML", "CSS", "JavaScript", "PostCSS", "TailwindCSS"],
    dad: 100,
    url: "https://fahrirhmnnnn.github.io/portfolio-fahri/",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Kopi",
    desk: "Dibuat menggunakan kombinasi HTML, CSS, dan JavaScript. Proyek ini dirancang untuk memberikan pengalaman pengguna yang responsif, estetis, dan fungsional.",
    tools: ["HTML", "CSS", "JavaScript"],
    dad: 200,
    url: "https://fahrirhmnnnn.github.io/website-kedai-kopi-cuy/",
  },
];

export const listSertifikat = [
  {
    id: 1,
    nama: "Front-End Web untuk Pemula",
    desk: "Mempelajari BOM dan DOM pada JavaScript, Penyimpanan Data dengan Web Storage, dan Interaktif dengan Event",
    platform: "Dicoding",
    gambar: sertifikat1,
    url: "https://www.dicoding.com/certificates/1OP8JEN4VPQK",
    dad: 0,
  },

  {
    id: 2,
    nama: "Dasar Pemrograman JavaScript",
    desk: "Mempelajari Asynchronus Process, Code Quality, OOP, dan Bermain dengan Function",
    platform: "Dicoding",
    gambar: sertifikat2,
    url: "https://www.dicoding.com/certificates/2VX35V8W3PYQ",
    dad: 100,
  },
  {
    id: 3,
    nama: "Dasar Pemrograman Web",
    desk: "Mempelajari HTML, CSS, Layout Responsive dengan Flexbox dan Grid,",
    platform: "Dicoding",
    gambar: sertifikat3,
    url: "https://www.dicoding.com/certificates/1RXYQQ82KZVM",
    dad: 200,
  },
];
