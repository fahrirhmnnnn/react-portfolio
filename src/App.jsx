import { useEffect } from "react";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";

import Hero from "./sections/Hero";
import Tentang from "./sections/Tentang";
import Sertifikat from "./sections/Sertifikat";
import Proyek from "./sections/Proyek";
import Kontak from "./sections/Kontak";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <PreLoader />

      <div className="container mx-auto px-4">
        <Navbar />

        <Hero />
        <Tentang />
        <Sertifikat />
        <Proyek />
        <Kontak />

        <Footer />
      </div>
    </>
  );
}

export default App;
