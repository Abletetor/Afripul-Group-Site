import work from "../../assets/our-work.png";
import workHero from "../../assets/work-hero.jpeg";
import Projects from "../../component/Projects/Projects";
import HeadlessTestimonial from "../../component/HeadlessTestimonial/HeadlessTestimonial";
import TrustedCompanies from "../../component/TrustedCompanies/TrustedCompanies";
import "./OurWorks.css";
import { FaArrowRight } from "react-icons/fa";
import StartBuilding2 from "../../component/StartBuilding/StartBuilding2";
import { motion } from 'framer-motion';

const OurWorks = () => {
   return (
      <>
         <section className="our-works">
            <motion.div
               initial={ { opacity: 0, y: 100 } }
               transition={ { duration: 1.5 } }
               whileInView={ { opacity: 1, y: 0 } }
               viewport={ { once: true } }>
               <div className="content-wrapper">
                  <div className="title-image">
                     <img src={ work } alt="Our Works" />
                  </div>
                  <div className="main-content">
                     <button className="content-btn">● Home to Originality & Creativity</button>
                     <p className="content-description">
                        Lorem ipsum dolor sit amet consectetur. Interdum facilisis at ornare lorem imperdiet enim posuere id nam facilisi. Morbi dictum sit gravida aliquam nam facilisi lacus.
                     </p>
                     <div className="check-item">
                        <FaArrowRight className="arrow-icon" />
                        <label htmlFor="impossible">Impossibility does not exist.</label>
                     </div>
                  </div>
                  <div className="sidebar">
                     <ul>
                        <li className="active">All Projects <span>24</span></li>
                        <li>Software Development <span>0</span></li>
                        <li>Web Development <span>02</span></li>
                        <li>Branding & Graphics <span>04</span></li>
                        <li>Digital Marketing <span>0</span></li>
                        <li>Business Development <span>0</span></li>
                        <li>UI/UX Design <span>0</span></li>
                        <li>Motion Graphics <span>0</span></li>
                     </ul>
                  </div>
                  <div className="image-section">
                     <img src={ workHero } alt="Our Work" />
                  </div>
               </div>
               <div className="quote-box">
                  <p>
                     Lorem ipsum dolor sit amet consectetur. Duis lacus egestas imperdiet dui porttitor habitant. Tincidunt augue amet magna mauris.
                  </p>
                  <span className="author">Albert Einstein</span>
               </div>
            </motion.div>
         </section>
         <Projects />
         <TrustedCompanies />
         <HeadlessTestimonial />
         <StartBuilding2 />
      </>
   );
};

export default OurWorks;
