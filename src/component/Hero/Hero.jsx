import { MdPlayCircleFilled, MdArrowCircleUp } from "react-icons/md";
import "./Hero.css";
import heroData from "./data";
import { motion } from "framer-motion";

const Hero = () => {
   return (
      <header className="hero">
         <motion.div
            initial={ { opacity: 0, y: 100 } }
            transition={ { duration: 1.5 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }>
            <button className="welcome">● Welcome to Afripul Group</button>
            <span className="hero-title">
               We Create the <MdArrowCircleUp className="icon" />
            </span>
            <h1 className="future">future.</h1>
            <h3 className="tagline">Impossibility Does not Exist.</h3>
            <p className="description">
               At Afripul group, we provide innovative, high-quality tech solutions tailored to meet the unique needs of businesses and individuals.We are your trusted partner in the digital age.
            </p>
            <button className="watch-reel">
               <MdPlayCircleFilled className="play" /> Watch our reel
            </button>

            <div className="service">
               { heroData.map((item, index) => (
                  <div className="service-item" key={ index }>
                     { item.icon }
                     { item.title }
                  </div>
               )) }
            </div>
         </motion.div>
      </header>
   );
};

export default Hero;
