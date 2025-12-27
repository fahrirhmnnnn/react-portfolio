import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";

import "remixicon/fonts/remixicon.css";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";

import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true, // animasi hanya sekali
  duration: 900, // default duration (opsional)
  easing: "ease-out-cubic",
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PreLoader />
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
