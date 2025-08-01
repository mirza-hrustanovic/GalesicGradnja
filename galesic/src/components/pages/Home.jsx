import Carousel from "../Carousel";
import Header from "../Header";
import About from "./About";
import Services from "./Services";
import Galery from "./Galery";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../Footer";


const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <>
      <Header />
      <Carousel />
      <div id="o-nama"><About /></div>
      <div id="nase-usluge"><Services /></div>
      <div id="galerija"><Galery /></div>
      <div id="kontakt"><Contact /></div>
      <Footer/>
      
    </>
  );
};

export default Home;
