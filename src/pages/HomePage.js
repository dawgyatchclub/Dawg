import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Tokenomics from "../components/Home/Tokenomics";
import Nft from "../components/Home/Nft";
import Roadmap from "../components/Home/Roadmap";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Nft />
      <Roadmap />
      <Footer />
    </>
  );
}

export default HomePage;
