import "./About.css";
import aboutImg from "../../assets/about-icon.png";
import OurStory from "../../component/OurStory/OurStory";
import TeamBehind from "../../component/TeamBehind/TeamBehind";
import WhatWeBelieve from "../../component/WhatWeBelieve/WhatWeBelieve";
import OurTeam from "../../component/OurTeam/OurTeam";
import StartBuilding from "../../component/StartBuilding/StartBuilding";
import { motion } from 'framer-motion';

const About = () => {
   return (
      <>
         <section className="about">
            <motion.div
               initial={ { opacity: 0, y: 100 } }
               transition={ { duration: 1.5 } }
               whileInView={ { opacity: 1, y: 0 } }
               viewport={ { once: true } }
               className="about-container">

               <div className="about-logo">
                  <img src={ aboutImg } alt="AfR Logo" />
               </div>

               <h1 className="about-title">
                  Building the future <br /> with Tech & Design
               </h1>

               <p className="about-text">
                  Rooted in our core values of Create, Brand, and Market, we provide solutions that empower businesses to achieve their fullest potential.
               </p>
            </motion.div>
         </section>
         <OurStory />
         <TeamBehind />
         <WhatWeBelieve />
         <OurTeam />
         <StartBuilding />
      </>
   );
};

export default About;
