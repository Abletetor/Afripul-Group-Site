import expertiseData from "./data";
import "./OurExpertise.css";
import { motion } from 'framer-motion';

const OurExpertise = () => {
   return (
      <section className="expertise">
         <motion.div
            initial={ { opacity: 0, y: 100 } }
            transition={ { duration: 1 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            className="expertise-container">
            <div className="expertise-header">
               <h2>Our Expertise</h2>
               <p>
                  Great software starts with a clear, collaborative process. Here’s how we bring your vision to life.
               </p>
            </div>
            <hr className="expertise-divider" />

            <div className="expertise-grid">
               { expertiseData.map((item, index) => (
                  <div className="expertise-card" key={ index }>
                     <div className="expertise-icon">{ item.icon }</div>
                     <h3>{ item.title }</h3>
                     <p>{ item.description }</p>
                     <a href="#">Learn more</a>
                  </div>
               )) }
            </div>
         </motion.div>
      </section>
   );
};

export default OurExpertise;
